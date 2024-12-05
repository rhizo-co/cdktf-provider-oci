# `opensearchOpensearchCluster` Submodule <a name="`opensearchOpensearchCluster` Submodule" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchOpensearchCluster <a name="OpensearchOpensearchCluster" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster oci_opensearch_opensearch_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opensearchopensearchcluster"

opensearchopensearchcluster.NewOpensearchOpensearchCluster(scope Construct, id *string, config OpensearchOpensearchClusterConfig) OpensearchOpensearchCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig">OpensearchOpensearchClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig">OpensearchOpensearchClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetDataNodeHostBareMetalShape">ResetDataNodeHostBareMetalShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetMasterNodeHostBareMetalShape">ResetMasterNodeHostBareMetalShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMasterUserName">ResetSecurityMasterUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMasterUserPasswordHash">ResetSecurityMasterUserPasswordHash</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMode">ResetSecurityMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSystemTags">ResetSystemTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.putTimeouts"></a>

```go
func PutTimeouts(value OpensearchOpensearchClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a>

---

##### `ResetDataNodeHostBareMetalShape` <a name="ResetDataNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetDataNodeHostBareMetalShape"></a>

```go
func ResetDataNodeHostBareMetalShape()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetMasterNodeHostBareMetalShape` <a name="ResetMasterNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetMasterNodeHostBareMetalShape"></a>

```go
func ResetMasterNodeHostBareMetalShape()
```

##### `ResetSecurityMasterUserName` <a name="ResetSecurityMasterUserName" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMasterUserName"></a>

```go
func ResetSecurityMasterUserName()
```

##### `ResetSecurityMasterUserPasswordHash` <a name="ResetSecurityMasterUserPasswordHash" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMasterUserPasswordHash"></a>

```go
func ResetSecurityMasterUserPasswordHash()
```

##### `ResetSecurityMode` <a name="ResetSecurityMode" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMode"></a>

```go
func ResetSecurityMode()
```

##### `ResetSystemTags` <a name="ResetSystemTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSystemTags"></a>

```go
func ResetSystemTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpensearchOpensearchCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opensearchopensearchcluster"

opensearchopensearchcluster.OpensearchOpensearchCluster_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opensearchopensearchcluster"

opensearchopensearchcluster.OpensearchOpensearchCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opensearchopensearchcluster"

opensearchopensearchcluster.OpensearchOpensearchCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opensearchopensearchcluster"

opensearchopensearchcluster.OpensearchOpensearchCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OpensearchOpensearchCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpensearchOpensearchCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpensearchOpensearchCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OpensearchOpensearchCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.availabilityDomains">AvailabilityDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardFqdn">OpendashboardFqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardPrivateIp">OpendashboardPrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opensearchFqdn">OpensearchFqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opensearchPrivateIp">OpensearchPrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeDeleted">TimeDeleted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference">OpensearchOpensearchClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.totalStorageGb">TotalStorageGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeCountInput">DataNodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostBareMetalShapeInput">DataNodeHostBareMetalShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostMemoryGbInput">DataNodeHostMemoryGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostOcpuCountInput">DataNodeHostOcpuCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostTypeInput">DataNodeHostTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeStorageGbInput">DataNodeStorageGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeCountInput">MasterNodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostBareMetalShapeInput">MasterNodeHostBareMetalShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostMemoryGbInput">MasterNodeHostMemoryGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostOcpuCountInput">MasterNodeHostOcpuCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostTypeInput">MasterNodeHostTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeCountInput">OpendashboardNodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGbInput">OpendashboardNodeHostMemoryGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCountInput">OpendashboardNodeHostOcpuCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserNameInput">SecurityMasterUserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserPasswordHashInput">SecurityMasterUserPasswordHashInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityModeInput">SecurityModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.softwareVersionInput">SoftwareVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetCompartmentIdInput">SubnetCompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.systemTagsInput">SystemTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnCompartmentIdInput">VcnCompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnIdInput">VcnIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeCount">DataNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostBareMetalShape">DataNodeHostBareMetalShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostMemoryGb">DataNodeHostMemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostOcpuCount">DataNodeHostOcpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostType">DataNodeHostType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeStorageGb">DataNodeStorageGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeCount">MasterNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostBareMetalShape">MasterNodeHostBareMetalShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostMemoryGb">MasterNodeHostMemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostOcpuCount">MasterNodeHostOcpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostType">MasterNodeHostType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeCount">OpendashboardNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGb">OpendashboardNodeHostMemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCount">OpendashboardNodeHostOcpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserName">SecurityMasterUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserPasswordHash">SecurityMasterUserPasswordHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMode">SecurityMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.softwareVersion">SoftwareVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetCompartmentId">SubnetCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.systemTags">SystemTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnCompartmentId">VcnCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnId">VcnId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityDomains`<sup>Required</sup> <a name="AvailabilityDomains" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.availabilityDomains"></a>

```go
func AvailabilityDomains() *[]*string
```

- *Type:* *[]*string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `OpendashboardFqdn`<sup>Required</sup> <a name="OpendashboardFqdn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardFqdn"></a>

```go
func OpendashboardFqdn() *string
```

- *Type:* *string

---

##### `OpendashboardPrivateIp`<sup>Required</sup> <a name="OpendashboardPrivateIp" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardPrivateIp"></a>

```go
func OpendashboardPrivateIp() *string
```

- *Type:* *string

---

##### `OpensearchFqdn`<sup>Required</sup> <a name="OpensearchFqdn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opensearchFqdn"></a>

```go
func OpensearchFqdn() *string
```

- *Type:* *string

---

##### `OpensearchPrivateIp`<sup>Required</sup> <a name="OpensearchPrivateIp" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opensearchPrivateIp"></a>

```go
func OpensearchPrivateIp() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeDeleted`<sup>Required</sup> <a name="TimeDeleted" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeDeleted"></a>

```go
func TimeDeleted() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeouts"></a>

```go
func Timeouts() OpensearchOpensearchClusterTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference">OpensearchOpensearchClusterTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `TotalStorageGb`<sup>Required</sup> <a name="TotalStorageGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.totalStorageGb"></a>

```go
func TotalStorageGb() *f64
```

- *Type:* *f64

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DataNodeCountInput`<sup>Optional</sup> <a name="DataNodeCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeCountInput"></a>

```go
func DataNodeCountInput() *f64
```

- *Type:* *f64

---

##### `DataNodeHostBareMetalShapeInput`<sup>Optional</sup> <a name="DataNodeHostBareMetalShapeInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostBareMetalShapeInput"></a>

```go
func DataNodeHostBareMetalShapeInput() *string
```

- *Type:* *string

---

##### `DataNodeHostMemoryGbInput`<sup>Optional</sup> <a name="DataNodeHostMemoryGbInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostMemoryGbInput"></a>

```go
func DataNodeHostMemoryGbInput() *f64
```

- *Type:* *f64

---

##### `DataNodeHostOcpuCountInput`<sup>Optional</sup> <a name="DataNodeHostOcpuCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostOcpuCountInput"></a>

```go
func DataNodeHostOcpuCountInput() *f64
```

- *Type:* *f64

---

##### `DataNodeHostTypeInput`<sup>Optional</sup> <a name="DataNodeHostTypeInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostTypeInput"></a>

```go
func DataNodeHostTypeInput() *string
```

- *Type:* *string

---

##### `DataNodeStorageGbInput`<sup>Optional</sup> <a name="DataNodeStorageGbInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeStorageGbInput"></a>

```go
func DataNodeStorageGbInput() *f64
```

- *Type:* *f64

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MasterNodeCountInput`<sup>Optional</sup> <a name="MasterNodeCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeCountInput"></a>

```go
func MasterNodeCountInput() *f64
```

- *Type:* *f64

---

##### `MasterNodeHostBareMetalShapeInput`<sup>Optional</sup> <a name="MasterNodeHostBareMetalShapeInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostBareMetalShapeInput"></a>

```go
func MasterNodeHostBareMetalShapeInput() *string
```

- *Type:* *string

---

##### `MasterNodeHostMemoryGbInput`<sup>Optional</sup> <a name="MasterNodeHostMemoryGbInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostMemoryGbInput"></a>

```go
func MasterNodeHostMemoryGbInput() *f64
```

- *Type:* *f64

---

##### `MasterNodeHostOcpuCountInput`<sup>Optional</sup> <a name="MasterNodeHostOcpuCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostOcpuCountInput"></a>

```go
func MasterNodeHostOcpuCountInput() *f64
```

- *Type:* *f64

---

##### `MasterNodeHostTypeInput`<sup>Optional</sup> <a name="MasterNodeHostTypeInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostTypeInput"></a>

```go
func MasterNodeHostTypeInput() *string
```

- *Type:* *string

---

##### `OpendashboardNodeCountInput`<sup>Optional</sup> <a name="OpendashboardNodeCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeCountInput"></a>

```go
func OpendashboardNodeCountInput() *f64
```

- *Type:* *f64

---

##### `OpendashboardNodeHostMemoryGbInput`<sup>Optional</sup> <a name="OpendashboardNodeHostMemoryGbInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGbInput"></a>

```go
func OpendashboardNodeHostMemoryGbInput() *f64
```

- *Type:* *f64

---

##### `OpendashboardNodeHostOcpuCountInput`<sup>Optional</sup> <a name="OpendashboardNodeHostOcpuCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCountInput"></a>

```go
func OpendashboardNodeHostOcpuCountInput() *f64
```

- *Type:* *f64

---

##### `SecurityMasterUserNameInput`<sup>Optional</sup> <a name="SecurityMasterUserNameInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserNameInput"></a>

```go
func SecurityMasterUserNameInput() *string
```

- *Type:* *string

---

##### `SecurityMasterUserPasswordHashInput`<sup>Optional</sup> <a name="SecurityMasterUserPasswordHashInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserPasswordHashInput"></a>

```go
func SecurityMasterUserPasswordHashInput() *string
```

- *Type:* *string

---

##### `SecurityModeInput`<sup>Optional</sup> <a name="SecurityModeInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityModeInput"></a>

```go
func SecurityModeInput() *string
```

- *Type:* *string

---

##### `SoftwareVersionInput`<sup>Optional</sup> <a name="SoftwareVersionInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.softwareVersionInput"></a>

```go
func SoftwareVersionInput() *string
```

- *Type:* *string

---

##### `SubnetCompartmentIdInput`<sup>Optional</sup> <a name="SubnetCompartmentIdInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetCompartmentIdInput"></a>

```go
func SubnetCompartmentIdInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `SystemTagsInput`<sup>Optional</sup> <a name="SystemTagsInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.systemTagsInput"></a>

```go
func SystemTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VcnCompartmentIdInput`<sup>Optional</sup> <a name="VcnCompartmentIdInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnCompartmentIdInput"></a>

```go
func VcnCompartmentIdInput() *string
```

- *Type:* *string

---

##### `VcnIdInput`<sup>Optional</sup> <a name="VcnIdInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnIdInput"></a>

```go
func VcnIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DataNodeCount`<sup>Required</sup> <a name="DataNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeCount"></a>

```go
func DataNodeCount() *f64
```

- *Type:* *f64

---

##### `DataNodeHostBareMetalShape`<sup>Required</sup> <a name="DataNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostBareMetalShape"></a>

```go
func DataNodeHostBareMetalShape() *string
```

- *Type:* *string

---

##### `DataNodeHostMemoryGb`<sup>Required</sup> <a name="DataNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostMemoryGb"></a>

```go
func DataNodeHostMemoryGb() *f64
```

- *Type:* *f64

---

##### `DataNodeHostOcpuCount`<sup>Required</sup> <a name="DataNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostOcpuCount"></a>

```go
func DataNodeHostOcpuCount() *f64
```

- *Type:* *f64

---

##### `DataNodeHostType`<sup>Required</sup> <a name="DataNodeHostType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostType"></a>

```go
func DataNodeHostType() *string
```

- *Type:* *string

---

##### `DataNodeStorageGb`<sup>Required</sup> <a name="DataNodeStorageGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeStorageGb"></a>

```go
func DataNodeStorageGb() *f64
```

- *Type:* *f64

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MasterNodeCount`<sup>Required</sup> <a name="MasterNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeCount"></a>

```go
func MasterNodeCount() *f64
```

- *Type:* *f64

---

##### `MasterNodeHostBareMetalShape`<sup>Required</sup> <a name="MasterNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostBareMetalShape"></a>

```go
func MasterNodeHostBareMetalShape() *string
```

- *Type:* *string

---

##### `MasterNodeHostMemoryGb`<sup>Required</sup> <a name="MasterNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostMemoryGb"></a>

```go
func MasterNodeHostMemoryGb() *f64
```

- *Type:* *f64

---

##### `MasterNodeHostOcpuCount`<sup>Required</sup> <a name="MasterNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostOcpuCount"></a>

```go
func MasterNodeHostOcpuCount() *f64
```

- *Type:* *f64

---

##### `MasterNodeHostType`<sup>Required</sup> <a name="MasterNodeHostType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostType"></a>

```go
func MasterNodeHostType() *string
```

- *Type:* *string

---

##### `OpendashboardNodeCount`<sup>Required</sup> <a name="OpendashboardNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeCount"></a>

```go
func OpendashboardNodeCount() *f64
```

- *Type:* *f64

---

##### `OpendashboardNodeHostMemoryGb`<sup>Required</sup> <a name="OpendashboardNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGb"></a>

```go
func OpendashboardNodeHostMemoryGb() *f64
```

- *Type:* *f64

---

##### `OpendashboardNodeHostOcpuCount`<sup>Required</sup> <a name="OpendashboardNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCount"></a>

```go
func OpendashboardNodeHostOcpuCount() *f64
```

- *Type:* *f64

---

##### `SecurityMasterUserName`<sup>Required</sup> <a name="SecurityMasterUserName" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserName"></a>

```go
func SecurityMasterUserName() *string
```

- *Type:* *string

---

##### `SecurityMasterUserPasswordHash`<sup>Required</sup> <a name="SecurityMasterUserPasswordHash" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserPasswordHash"></a>

```go
func SecurityMasterUserPasswordHash() *string
```

- *Type:* *string

---

##### `SecurityMode`<sup>Required</sup> <a name="SecurityMode" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMode"></a>

```go
func SecurityMode() *string
```

- *Type:* *string

---

##### `SoftwareVersion`<sup>Required</sup> <a name="SoftwareVersion" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.softwareVersion"></a>

```go
func SoftwareVersion() *string
```

- *Type:* *string

---

##### `SubnetCompartmentId`<sup>Required</sup> <a name="SubnetCompartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetCompartmentId"></a>

```go
func SubnetCompartmentId() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.systemTags"></a>

```go
func SystemTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VcnCompartmentId`<sup>Required</sup> <a name="VcnCompartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnCompartmentId"></a>

```go
func VcnCompartmentId() *string
```

- *Type:* *string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnId"></a>

```go
func VcnId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchOpensearchClusterConfig <a name="OpensearchOpensearchClusterConfig" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opensearchopensearchcluster"

&opensearchopensearchcluster.OpensearchOpensearchClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DataNodeCount: *f64,
	DataNodeHostMemoryGb: *f64,
	DataNodeHostOcpuCount: *f64,
	DataNodeHostType: *string,
	DataNodeStorageGb: *f64,
	DisplayName: *string,
	MasterNodeCount: *f64,
	MasterNodeHostMemoryGb: *f64,
	MasterNodeHostOcpuCount: *f64,
	MasterNodeHostType: *string,
	OpendashboardNodeCount: *f64,
	OpendashboardNodeHostMemoryGb: *f64,
	OpendashboardNodeHostOcpuCount: *f64,
	SoftwareVersion: *string,
	SubnetCompartmentId: *string,
	SubnetId: *string,
	VcnCompartmentId: *string,
	VcnId: *string,
	DataNodeHostBareMetalShape: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	MasterNodeHostBareMetalShape: *string,
	SecurityMasterUserName: *string,
	SecurityMasterUserPasswordHash: *string,
	SecurityMode: *string,
	SystemTags: *map[string]*string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#compartment_id OpensearchOpensearchCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeCount">DataNodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_count OpensearchOpensearchCluster#data_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostMemoryGb">DataNodeHostMemoryGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_memory_gb OpensearchOpensearchCluster#data_node_host_memory_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostOcpuCount">DataNodeHostOcpuCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_ocpu_count OpensearchOpensearchCluster#data_node_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostType">DataNodeHostType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_type OpensearchOpensearchCluster#data_node_host_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeStorageGb">DataNodeStorageGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_storage_gb OpensearchOpensearchCluster#data_node_storage_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#display_name OpensearchOpensearchCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeCount">MasterNodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_count OpensearchOpensearchCluster#master_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostMemoryGb">MasterNodeHostMemoryGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_memory_gb OpensearchOpensearchCluster#master_node_host_memory_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostOcpuCount">MasterNodeHostOcpuCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_ocpu_count OpensearchOpensearchCluster#master_node_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostType">MasterNodeHostType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_type OpensearchOpensearchCluster#master_node_host_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeCount">OpendashboardNodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_count OpensearchOpensearchCluster#opendashboard_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeHostMemoryGb">OpendashboardNodeHostMemoryGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_memory_gb OpensearchOpensearchCluster#opendashboard_node_host_memory_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeHostOcpuCount">OpendashboardNodeHostOcpuCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_ocpu_count OpensearchOpensearchCluster#opendashboard_node_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.softwareVersion">SoftwareVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#software_version OpensearchOpensearchCluster#software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.subnetCompartmentId">SubnetCompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_compartment_id OpensearchOpensearchCluster#subnet_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_id OpensearchOpensearchCluster#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.vcnCompartmentId">VcnCompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_compartment_id OpensearchOpensearchCluster#vcn_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.vcnId">VcnId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_id OpensearchOpensearchCluster#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostBareMetalShape">DataNodeHostBareMetalShape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_bare_metal_shape OpensearchOpensearchCluster#data_node_host_bare_metal_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#defined_tags OpensearchOpensearchCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#freeform_tags OpensearchOpensearchCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#id OpensearchOpensearchCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostBareMetalShape">MasterNodeHostBareMetalShape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_bare_metal_shape OpensearchOpensearchCluster#master_node_host_bare_metal_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMasterUserName">SecurityMasterUserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_name OpensearchOpensearchCluster#security_master_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMasterUserPasswordHash">SecurityMasterUserPasswordHash</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_password_hash OpensearchOpensearchCluster#security_master_user_password_hash}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMode">SecurityMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_mode OpensearchOpensearchCluster#security_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.systemTags">SystemTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#system_tags OpensearchOpensearchCluster#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#compartment_id OpensearchOpensearchCluster#compartment_id}.

---

##### `DataNodeCount`<sup>Required</sup> <a name="DataNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeCount"></a>

```go
DataNodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_count OpensearchOpensearchCluster#data_node_count}.

---

##### `DataNodeHostMemoryGb`<sup>Required</sup> <a name="DataNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostMemoryGb"></a>

```go
DataNodeHostMemoryGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_memory_gb OpensearchOpensearchCluster#data_node_host_memory_gb}.

---

##### `DataNodeHostOcpuCount`<sup>Required</sup> <a name="DataNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostOcpuCount"></a>

```go
DataNodeHostOcpuCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_ocpu_count OpensearchOpensearchCluster#data_node_host_ocpu_count}.

---

##### `DataNodeHostType`<sup>Required</sup> <a name="DataNodeHostType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostType"></a>

```go
DataNodeHostType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_type OpensearchOpensearchCluster#data_node_host_type}.

---

##### `DataNodeStorageGb`<sup>Required</sup> <a name="DataNodeStorageGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeStorageGb"></a>

```go
DataNodeStorageGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_storage_gb OpensearchOpensearchCluster#data_node_storage_gb}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#display_name OpensearchOpensearchCluster#display_name}.

---

##### `MasterNodeCount`<sup>Required</sup> <a name="MasterNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeCount"></a>

```go
MasterNodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_count OpensearchOpensearchCluster#master_node_count}.

---

##### `MasterNodeHostMemoryGb`<sup>Required</sup> <a name="MasterNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostMemoryGb"></a>

```go
MasterNodeHostMemoryGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_memory_gb OpensearchOpensearchCluster#master_node_host_memory_gb}.

---

##### `MasterNodeHostOcpuCount`<sup>Required</sup> <a name="MasterNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostOcpuCount"></a>

```go
MasterNodeHostOcpuCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_ocpu_count OpensearchOpensearchCluster#master_node_host_ocpu_count}.

---

##### `MasterNodeHostType`<sup>Required</sup> <a name="MasterNodeHostType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostType"></a>

```go
MasterNodeHostType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_type OpensearchOpensearchCluster#master_node_host_type}.

---

##### `OpendashboardNodeCount`<sup>Required</sup> <a name="OpendashboardNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeCount"></a>

```go
OpendashboardNodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_count OpensearchOpensearchCluster#opendashboard_node_count}.

---

##### `OpendashboardNodeHostMemoryGb`<sup>Required</sup> <a name="OpendashboardNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeHostMemoryGb"></a>

```go
OpendashboardNodeHostMemoryGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_memory_gb OpensearchOpensearchCluster#opendashboard_node_host_memory_gb}.

---

##### `OpendashboardNodeHostOcpuCount`<sup>Required</sup> <a name="OpendashboardNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeHostOcpuCount"></a>

```go
OpendashboardNodeHostOcpuCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_ocpu_count OpensearchOpensearchCluster#opendashboard_node_host_ocpu_count}.

---

##### `SoftwareVersion`<sup>Required</sup> <a name="SoftwareVersion" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.softwareVersion"></a>

```go
SoftwareVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#software_version OpensearchOpensearchCluster#software_version}.

---

##### `SubnetCompartmentId`<sup>Required</sup> <a name="SubnetCompartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.subnetCompartmentId"></a>

```go
SubnetCompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_compartment_id OpensearchOpensearchCluster#subnet_compartment_id}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_id OpensearchOpensearchCluster#subnet_id}.

---

##### `VcnCompartmentId`<sup>Required</sup> <a name="VcnCompartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.vcnCompartmentId"></a>

```go
VcnCompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_compartment_id OpensearchOpensearchCluster#vcn_compartment_id}.

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.vcnId"></a>

```go
VcnId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_id OpensearchOpensearchCluster#vcn_id}.

---

##### `DataNodeHostBareMetalShape`<sup>Optional</sup> <a name="DataNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostBareMetalShape"></a>

```go
DataNodeHostBareMetalShape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_bare_metal_shape OpensearchOpensearchCluster#data_node_host_bare_metal_shape}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#defined_tags OpensearchOpensearchCluster#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#freeform_tags OpensearchOpensearchCluster#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#id OpensearchOpensearchCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MasterNodeHostBareMetalShape`<sup>Optional</sup> <a name="MasterNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostBareMetalShape"></a>

```go
MasterNodeHostBareMetalShape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_bare_metal_shape OpensearchOpensearchCluster#master_node_host_bare_metal_shape}.

---

##### `SecurityMasterUserName`<sup>Optional</sup> <a name="SecurityMasterUserName" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMasterUserName"></a>

```go
SecurityMasterUserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_name OpensearchOpensearchCluster#security_master_user_name}.

---

##### `SecurityMasterUserPasswordHash`<sup>Optional</sup> <a name="SecurityMasterUserPasswordHash" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMasterUserPasswordHash"></a>

```go
SecurityMasterUserPasswordHash *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_password_hash OpensearchOpensearchCluster#security_master_user_password_hash}.

---

##### `SecurityMode`<sup>Optional</sup> <a name="SecurityMode" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMode"></a>

```go
SecurityMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_mode OpensearchOpensearchCluster#security_mode}.

---

##### `SystemTags`<sup>Optional</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.systemTags"></a>

```go
SystemTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#system_tags OpensearchOpensearchCluster#system_tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.timeouts"></a>

```go
Timeouts OpensearchOpensearchClusterTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#timeouts OpensearchOpensearchCluster#timeouts}

---

### OpensearchOpensearchClusterTimeouts <a name="OpensearchOpensearchClusterTimeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opensearchopensearchcluster"

&opensearchopensearchcluster.OpensearchOpensearchClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#create OpensearchOpensearchCluster#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#delete OpensearchOpensearchCluster#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#update OpensearchOpensearchCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#create OpensearchOpensearchCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#delete OpensearchOpensearchCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#update OpensearchOpensearchCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchOpensearchClusterTimeoutsOutputReference <a name="OpensearchOpensearchClusterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opensearchopensearchcluster"

opensearchopensearchcluster.NewOpensearchOpensearchClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchOpensearchClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



