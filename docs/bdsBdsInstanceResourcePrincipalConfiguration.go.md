# `bdsBdsInstanceResourcePrincipalConfiguration` Submodule <a name="`bdsBdsInstanceResourcePrincipalConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BdsBdsInstanceResourcePrincipalConfiguration <a name="BdsBdsInstanceResourcePrincipalConfiguration" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration oci_bds_bds_instance_resource_principal_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceresourceprincipalconfiguration"

bdsbdsinstanceresourceprincipalconfiguration.NewBdsBdsInstanceResourcePrincipalConfiguration(scope Construct, id *string, config BdsBdsInstanceResourcePrincipalConfigurationConfig) BdsBdsInstanceResourcePrincipalConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig">BdsBdsInstanceResourcePrincipalConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig">BdsBdsInstanceResourcePrincipalConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetForceRefreshResourcePrincipalTrigger">ResetForceRefreshResourcePrincipalTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetSessionTokenLifeSpanDurationInHours">ResetSessionTokenLifeSpanDurationInHours</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value BdsBdsInstanceResourcePrincipalConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts">BdsBdsInstanceResourcePrincipalConfigurationTimeouts</a>

---

##### `ResetForceRefreshResourcePrincipalTrigger` <a name="ResetForceRefreshResourcePrincipalTrigger" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetForceRefreshResourcePrincipalTrigger"></a>

```go
func ResetForceRefreshResourcePrincipalTrigger()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetSessionTokenLifeSpanDurationInHours` <a name="ResetSessionTokenLifeSpanDurationInHours" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetSessionTokenLifeSpanDurationInHours"></a>

```go
func ResetSessionTokenLifeSpanDurationInHours()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BdsBdsInstanceResourcePrincipalConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceresourceprincipalconfiguration"

bdsbdsinstanceresourceprincipalconfiguration.BdsBdsInstanceResourcePrincipalConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceresourceprincipalconfiguration"

bdsbdsinstanceresourceprincipalconfiguration.BdsBdsInstanceResourcePrincipalConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceresourceprincipalconfiguration"

bdsbdsinstanceresourceprincipalconfiguration.BdsBdsInstanceResourcePrincipalConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceresourceprincipalconfiguration"

bdsbdsinstanceresourceprincipalconfiguration.BdsBdsInstanceResourcePrincipalConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BdsBdsInstanceResourcePrincipalConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BdsBdsInstanceResourcePrincipalConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BdsBdsInstanceResourcePrincipalConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BdsBdsInstanceResourcePrincipalConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference">BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenExpiry">TimeTokenExpiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenRefreshed">TimeTokenRefreshed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceIdInput">BdsInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.clusterAdminPasswordInput">ClusterAdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.forceRefreshResourcePrincipalTriggerInput">ForceRefreshResourcePrincipalTriggerInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.sessionTokenLifeSpanDurationInHoursInput">SessionTokenLifeSpanDurationInHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceId">BdsInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.clusterAdminPassword">ClusterAdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.forceRefreshResourcePrincipalTrigger">ForceRefreshResourcePrincipalTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.sessionTokenLifeSpanDurationInHours">SessionTokenLifeSpanDurationInHours</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeouts"></a>

```go
func Timeouts() BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference">BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference</a>

---

##### `TimeTokenExpiry`<sup>Required</sup> <a name="TimeTokenExpiry" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenExpiry"></a>

```go
func TimeTokenExpiry() *string
```

- *Type:* *string

---

##### `TimeTokenRefreshed`<sup>Required</sup> <a name="TimeTokenRefreshed" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenRefreshed"></a>

```go
func TimeTokenRefreshed() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `BdsInstanceIdInput`<sup>Optional</sup> <a name="BdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceIdInput"></a>

```go
func BdsInstanceIdInput() *string
```

- *Type:* *string

---

##### `ClusterAdminPasswordInput`<sup>Optional</sup> <a name="ClusterAdminPasswordInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.clusterAdminPasswordInput"></a>

```go
func ClusterAdminPasswordInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ForceRefreshResourcePrincipalTriggerInput`<sup>Optional</sup> <a name="ForceRefreshResourcePrincipalTriggerInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.forceRefreshResourcePrincipalTriggerInput"></a>

```go
func ForceRefreshResourcePrincipalTriggerInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SessionTokenLifeSpanDurationInHoursInput`<sup>Optional</sup> <a name="SessionTokenLifeSpanDurationInHoursInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.sessionTokenLifeSpanDurationInHoursInput"></a>

```go
func SessionTokenLifeSpanDurationInHoursInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceId"></a>

```go
func BdsInstanceId() *string
```

- *Type:* *string

---

##### `ClusterAdminPassword`<sup>Required</sup> <a name="ClusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.clusterAdminPassword"></a>

```go
func ClusterAdminPassword() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ForceRefreshResourcePrincipalTrigger`<sup>Required</sup> <a name="ForceRefreshResourcePrincipalTrigger" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.forceRefreshResourcePrincipalTrigger"></a>

```go
func ForceRefreshResourcePrincipalTrigger() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SessionTokenLifeSpanDurationInHours`<sup>Required</sup> <a name="SessionTokenLifeSpanDurationInHours" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.sessionTokenLifeSpanDurationInHours"></a>

```go
func SessionTokenLifeSpanDurationInHours() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BdsBdsInstanceResourcePrincipalConfigurationConfig <a name="BdsBdsInstanceResourcePrincipalConfigurationConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceresourceprincipalconfiguration"

&bdsbdsinstanceresourceprincipalconfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BdsInstanceId: *string,
	ClusterAdminPassword: *string,
	DisplayName: *string,
	ForceRefreshResourcePrincipalTrigger: *f64,
	Id: *string,
	SessionTokenLifeSpanDurationInHours: *f64,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.bdsInstanceId">BdsInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#bds_instance_id BdsBdsInstanceResourcePrincipalConfiguration#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.clusterAdminPassword">ClusterAdminPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#cluster_admin_password BdsBdsInstanceResourcePrincipalConfiguration#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#display_name BdsBdsInstanceResourcePrincipalConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.forceRefreshResourcePrincipalTrigger">ForceRefreshResourcePrincipalTrigger</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#force_refresh_resource_principal_trigger BdsBdsInstanceResourcePrincipalConfiguration#force_refresh_resource_principal_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#id BdsBdsInstanceResourcePrincipalConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.sessionTokenLifeSpanDurationInHours">SessionTokenLifeSpanDurationInHours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#session_token_life_span_duration_in_hours BdsBdsInstanceResourcePrincipalConfiguration#session_token_life_span_duration_in_hours}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts">BdsBdsInstanceResourcePrincipalConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.bdsInstanceId"></a>

```go
BdsInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#bds_instance_id BdsBdsInstanceResourcePrincipalConfiguration#bds_instance_id}.

---

##### `ClusterAdminPassword`<sup>Required</sup> <a name="ClusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.clusterAdminPassword"></a>

```go
ClusterAdminPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#cluster_admin_password BdsBdsInstanceResourcePrincipalConfiguration#cluster_admin_password}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#display_name BdsBdsInstanceResourcePrincipalConfiguration#display_name}.

---

##### `ForceRefreshResourcePrincipalTrigger`<sup>Optional</sup> <a name="ForceRefreshResourcePrincipalTrigger" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.forceRefreshResourcePrincipalTrigger"></a>

```go
ForceRefreshResourcePrincipalTrigger *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#force_refresh_resource_principal_trigger BdsBdsInstanceResourcePrincipalConfiguration#force_refresh_resource_principal_trigger}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#id BdsBdsInstanceResourcePrincipalConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SessionTokenLifeSpanDurationInHours`<sup>Optional</sup> <a name="SessionTokenLifeSpanDurationInHours" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.sessionTokenLifeSpanDurationInHours"></a>

```go
SessionTokenLifeSpanDurationInHours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#session_token_life_span_duration_in_hours BdsBdsInstanceResourcePrincipalConfiguration#session_token_life_span_duration_in_hours}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationConfig.property.timeouts"></a>

```go
Timeouts BdsBdsInstanceResourcePrincipalConfigurationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts">BdsBdsInstanceResourcePrincipalConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#timeouts BdsBdsInstanceResourcePrincipalConfiguration#timeouts}

---

### BdsBdsInstanceResourcePrincipalConfigurationTimeouts <a name="BdsBdsInstanceResourcePrincipalConfigurationTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceresourceprincipalconfiguration"

&bdsbdsinstanceresourceprincipalconfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#create BdsBdsInstanceResourcePrincipalConfiguration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#delete BdsBdsInstanceResourcePrincipalConfiguration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#update BdsBdsInstanceResourcePrincipalConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#create BdsBdsInstanceResourcePrincipalConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#delete BdsBdsInstanceResourcePrincipalConfiguration#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_resource_principal_configuration#update BdsBdsInstanceResourcePrincipalConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference <a name="BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsbdsinstanceresourceprincipalconfiguration"

bdsbdsinstanceresourceprincipalconfiguration.NewBdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceResourcePrincipalConfiguration.BdsBdsInstanceResourcePrincipalConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



