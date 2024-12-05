# `opsiHostInsight` Submodule <a name="`opsiHostInsight` Submodule" id="rhizo-co-terraform-provider-oci.opsiHostInsight"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiHostInsight <a name="OpsiHostInsight" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight oci_opsi_host_insight}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsihostinsight"

opsihostinsight.NewOpsiHostInsight(scope Construct, id *string, config OpsiHostInsightConfig) OpsiHostInsight
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig">OpsiHostInsightConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig">OpsiHostInsightConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetComputeId">ResetComputeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetEnterpriseManagerBridgeId">ResetEnterpriseManagerBridgeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetEnterpriseManagerEntityIdentifier">ResetEnterpriseManagerEntityIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetEnterpriseManagerIdentifier">ResetEnterpriseManagerIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetExadataInsightId">ResetExadataInsightId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetManagementAgentId">ResetManagementAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.putTimeouts"></a>

```go
func PutTimeouts(value OpsiHostInsightTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts">OpsiHostInsightTimeouts</a>

---

##### `ResetComputeId` <a name="ResetComputeId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetComputeId"></a>

```go
func ResetComputeId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetEnterpriseManagerBridgeId` <a name="ResetEnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetEnterpriseManagerBridgeId"></a>

```go
func ResetEnterpriseManagerBridgeId()
```

##### `ResetEnterpriseManagerEntityIdentifier` <a name="ResetEnterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetEnterpriseManagerEntityIdentifier"></a>

```go
func ResetEnterpriseManagerEntityIdentifier()
```

##### `ResetEnterpriseManagerIdentifier` <a name="ResetEnterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetEnterpriseManagerIdentifier"></a>

```go
func ResetEnterpriseManagerIdentifier()
```

##### `ResetExadataInsightId` <a name="ResetExadataInsightId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetExadataInsightId"></a>

```go
func ResetExadataInsightId()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetId"></a>

```go
func ResetId()
```

##### `ResetManagementAgentId` <a name="ResetManagementAgentId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetManagementAgentId"></a>

```go
func ResetManagementAgentId()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpsiHostInsight resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsihostinsight"

opsihostinsight.OpsiHostInsight_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsihostinsight"

opsihostinsight.OpsiHostInsight_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsihostinsight"

opsihostinsight.OpsiHostInsight_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsihostinsight"

opsihostinsight.OpsiHostInsight_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OpsiHostInsight resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpsiHostInsight to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpsiHostInsight that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OpsiHostInsight to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityDisplayName">EnterpriseManagerEntityDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityName">EnterpriseManagerEntityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityType">EnterpriseManagerEntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.hostDisplayName">HostDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.hostType">HostType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.platformName">PlatformName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.platformType">PlatformType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.platformVersion">PlatformVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.processorCount">ProcessorCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference">OpsiHostInsightTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.computeIdInput">ComputeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerBridgeIdInput">EnterpriseManagerBridgeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityIdentifierInput">EnterpriseManagerEntityIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerIdentifierInput">EnterpriseManagerIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.entitySourceInput">EntitySourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.exadataInsightIdInput">ExadataInsightIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.managementAgentIdInput">ManagementAgentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.computeId">ComputeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerBridgeId">EnterpriseManagerBridgeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityIdentifier">EnterpriseManagerEntityIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerIdentifier">EnterpriseManagerIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.entitySource">EntitySource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.exadataInsightId">ExadataInsightId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.managementAgentId">ManagementAgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnterpriseManagerEntityDisplayName`<sup>Required</sup> <a name="EnterpriseManagerEntityDisplayName" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityDisplayName"></a>

```go
func EnterpriseManagerEntityDisplayName() *string
```

- *Type:* *string

---

##### `EnterpriseManagerEntityName`<sup>Required</sup> <a name="EnterpriseManagerEntityName" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityName"></a>

```go
func EnterpriseManagerEntityName() *string
```

- *Type:* *string

---

##### `EnterpriseManagerEntityType`<sup>Required</sup> <a name="EnterpriseManagerEntityType" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityType"></a>

```go
func EnterpriseManagerEntityType() *string
```

- *Type:* *string

---

##### `HostDisplayName`<sup>Required</sup> <a name="HostDisplayName" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.hostDisplayName"></a>

```go
func HostDisplayName() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `HostType`<sup>Required</sup> <a name="HostType" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.hostType"></a>

```go
func HostType() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `PlatformName`<sup>Required</sup> <a name="PlatformName" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.platformName"></a>

```go
func PlatformName() *string
```

- *Type:* *string

---

##### `PlatformType`<sup>Required</sup> <a name="PlatformType" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.platformType"></a>

```go
func PlatformType() *string
```

- *Type:* *string

---

##### `PlatformVersion`<sup>Required</sup> <a name="PlatformVersion" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.platformVersion"></a>

```go
func PlatformVersion() *string
```

- *Type:* *string

---

##### `ProcessorCount`<sup>Required</sup> <a name="ProcessorCount" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.processorCount"></a>

```go
func ProcessorCount() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeouts"></a>

```go
func Timeouts() OpsiHostInsightTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference">OpsiHostInsightTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ComputeIdInput`<sup>Optional</sup> <a name="ComputeIdInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.computeIdInput"></a>

```go
func ComputeIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EnterpriseManagerBridgeIdInput`<sup>Optional</sup> <a name="EnterpriseManagerBridgeIdInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerBridgeIdInput"></a>

```go
func EnterpriseManagerBridgeIdInput() *string
```

- *Type:* *string

---

##### `EnterpriseManagerEntityIdentifierInput`<sup>Optional</sup> <a name="EnterpriseManagerEntityIdentifierInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityIdentifierInput"></a>

```go
func EnterpriseManagerEntityIdentifierInput() *string
```

- *Type:* *string

---

##### `EnterpriseManagerIdentifierInput`<sup>Optional</sup> <a name="EnterpriseManagerIdentifierInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerIdentifierInput"></a>

```go
func EnterpriseManagerIdentifierInput() *string
```

- *Type:* *string

---

##### `EntitySourceInput`<sup>Optional</sup> <a name="EntitySourceInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.entitySourceInput"></a>

```go
func EntitySourceInput() *string
```

- *Type:* *string

---

##### `ExadataInsightIdInput`<sup>Optional</sup> <a name="ExadataInsightIdInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.exadataInsightIdInput"></a>

```go
func ExadataInsightIdInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagementAgentIdInput`<sup>Optional</sup> <a name="ManagementAgentIdInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.managementAgentIdInput"></a>

```go
func ManagementAgentIdInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComputeId`<sup>Required</sup> <a name="ComputeId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.computeId"></a>

```go
func ComputeId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EnterpriseManagerBridgeId`<sup>Required</sup> <a name="EnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerBridgeId"></a>

```go
func EnterpriseManagerBridgeId() *string
```

- *Type:* *string

---

##### `EnterpriseManagerEntityIdentifier`<sup>Required</sup> <a name="EnterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityIdentifier"></a>

```go
func EnterpriseManagerEntityIdentifier() *string
```

- *Type:* *string

---

##### `EnterpriseManagerIdentifier`<sup>Required</sup> <a name="EnterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerIdentifier"></a>

```go
func EnterpriseManagerIdentifier() *string
```

- *Type:* *string

---

##### `EntitySource`<sup>Required</sup> <a name="EntitySource" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.entitySource"></a>

```go
func EntitySource() *string
```

- *Type:* *string

---

##### `ExadataInsightId`<sup>Required</sup> <a name="ExadataInsightId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.exadataInsightId"></a>

```go
func ExadataInsightId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.managementAgentId"></a>

```go
func ManagementAgentId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiHostInsightConfig <a name="OpsiHostInsightConfig" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsihostinsight"

&opsihostinsight.OpsiHostInsightConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	EntitySource: *string,
	ComputeId: *string,
	DefinedTags: *map[string]*string,
	EnterpriseManagerBridgeId: *string,
	EnterpriseManagerEntityIdentifier: *string,
	EnterpriseManagerIdentifier: *string,
	ExadataInsightId: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	ManagementAgentId: *string,
	Status: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.opsiHostInsight.OpsiHostInsightTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#compartment_id OpsiHostInsight#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.entitySource">EntitySource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#entity_source OpsiHostInsight#entity_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.computeId">ComputeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#compute_id OpsiHostInsight#compute_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#defined_tags OpsiHostInsight#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.enterpriseManagerBridgeId">EnterpriseManagerBridgeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_bridge_id OpsiHostInsight#enterprise_manager_bridge_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.enterpriseManagerEntityIdentifier">EnterpriseManagerEntityIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_entity_identifier OpsiHostInsight#enterprise_manager_entity_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.enterpriseManagerIdentifier">EnterpriseManagerIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_identifier OpsiHostInsight#enterprise_manager_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.exadataInsightId">ExadataInsightId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#exadata_insight_id OpsiHostInsight#exadata_insight_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#freeform_tags OpsiHostInsight#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#id OpsiHostInsight#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.managementAgentId">ManagementAgentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#management_agent_id OpsiHostInsight#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#status OpsiHostInsight#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts">OpsiHostInsightTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#compartment_id OpsiHostInsight#compartment_id}.

---

##### `EntitySource`<sup>Required</sup> <a name="EntitySource" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.entitySource"></a>

```go
EntitySource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#entity_source OpsiHostInsight#entity_source}.

---

##### `ComputeId`<sup>Optional</sup> <a name="ComputeId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.computeId"></a>

```go
ComputeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#compute_id OpsiHostInsight#compute_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#defined_tags OpsiHostInsight#defined_tags}.

---

##### `EnterpriseManagerBridgeId`<sup>Optional</sup> <a name="EnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.enterpriseManagerBridgeId"></a>

```go
EnterpriseManagerBridgeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_bridge_id OpsiHostInsight#enterprise_manager_bridge_id}.

---

##### `EnterpriseManagerEntityIdentifier`<sup>Optional</sup> <a name="EnterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.enterpriseManagerEntityIdentifier"></a>

```go
EnterpriseManagerEntityIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_entity_identifier OpsiHostInsight#enterprise_manager_entity_identifier}.

---

##### `EnterpriseManagerIdentifier`<sup>Optional</sup> <a name="EnterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.enterpriseManagerIdentifier"></a>

```go
EnterpriseManagerIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_identifier OpsiHostInsight#enterprise_manager_identifier}.

---

##### `ExadataInsightId`<sup>Optional</sup> <a name="ExadataInsightId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.exadataInsightId"></a>

```go
ExadataInsightId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#exadata_insight_id OpsiHostInsight#exadata_insight_id}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#freeform_tags OpsiHostInsight#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#id OpsiHostInsight#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagementAgentId`<sup>Optional</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.managementAgentId"></a>

```go
ManagementAgentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#management_agent_id OpsiHostInsight#management_agent_id}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#status OpsiHostInsight#status}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.timeouts"></a>

```go
Timeouts OpsiHostInsightTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts">OpsiHostInsightTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#timeouts OpsiHostInsight#timeouts}

---

### OpsiHostInsightTimeouts <a name="OpsiHostInsightTimeouts" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsihostinsight"

&opsihostinsight.OpsiHostInsightTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#create OpsiHostInsight#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#delete OpsiHostInsight#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#update OpsiHostInsight#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#create OpsiHostInsight#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#delete OpsiHostInsight#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#update OpsiHostInsight#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiHostInsightTimeoutsOutputReference <a name="OpsiHostInsightTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsihostinsight"

opsihostinsight.NewOpsiHostInsightTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsiHostInsightTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



