# `opsiOpsiConfiguration` Submodule <a name="`opsiOpsiConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiOpsiConfiguration <a name="OpsiOpsiConfiguration" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration oci_opsi_opsi_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiopsiconfiguration"

opsiopsiconfiguration.NewOpsiOpsiConfiguration(scope Construct, id *string, config OpsiOpsiConfigurationConfig) OpsiOpsiConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig">OpsiOpsiConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig">OpsiOpsiConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.putConfigItems">PutConfigItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItemCustomStatus">ResetConfigItemCustomStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItemField">ResetConfigItemField</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItems">ResetConfigItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItemsApplicableContext">ResetConfigItemsApplicableContext</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetOpsiConfigField">ResetOpsiConfigField</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetSystemTags">ResetSystemTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfigItems` <a name="PutConfigItems" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.putConfigItems"></a>

```go
func PutConfigItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.putConfigItems.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value OpsiOpsiConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts">OpsiOpsiConfigurationTimeouts</a>

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetConfigItemCustomStatus` <a name="ResetConfigItemCustomStatus" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItemCustomStatus"></a>

```go
func ResetConfigItemCustomStatus()
```

##### `ResetConfigItemField` <a name="ResetConfigItemField" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItemField"></a>

```go
func ResetConfigItemField()
```

##### `ResetConfigItems` <a name="ResetConfigItems" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItems"></a>

```go
func ResetConfigItems()
```

##### `ResetConfigItemsApplicableContext` <a name="ResetConfigItemsApplicableContext" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetConfigItemsApplicableContext"></a>

```go
func ResetConfigItemsApplicableContext()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetOpsiConfigField` <a name="ResetOpsiConfigField" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetOpsiConfigField"></a>

```go
func ResetOpsiConfigField()
```

##### `ResetSystemTags` <a name="ResetSystemTags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetSystemTags"></a>

```go
func ResetSystemTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpsiOpsiConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiopsiconfiguration"

opsiopsiconfiguration.OpsiOpsiConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiopsiconfiguration"

opsiopsiconfiguration.OpsiOpsiConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiopsiconfiguration"

opsiopsiconfiguration.OpsiOpsiConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiopsiconfiguration"

opsiopsiconfiguration.OpsiOpsiConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OpsiOpsiConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpsiOpsiConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpsiOpsiConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OpsiOpsiConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItems">ConfigItems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList">OpsiOpsiConfigurationConfigItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference">OpsiOpsiConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemCustomStatusInput">ConfigItemCustomStatusInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemFieldInput">ConfigItemFieldInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemsApplicableContextInput">ConfigItemsApplicableContextInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemsInput">ConfigItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigFieldInput">OpsiConfigFieldInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigTypeInput">OpsiConfigTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.systemTagsInput">SystemTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemCustomStatus">ConfigItemCustomStatus</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemField">ConfigItemField</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemsApplicableContext">ConfigItemsApplicableContext</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigField">OpsiConfigField</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigType">OpsiConfigType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.systemTags">SystemTags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigItems`<sup>Required</sup> <a name="ConfigItems" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItems"></a>

```go
func ConfigItems() OpsiOpsiConfigurationConfigItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList">OpsiOpsiConfigurationConfigItemsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeouts"></a>

```go
func Timeouts() OpsiOpsiConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference">OpsiOpsiConfigurationTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ConfigItemCustomStatusInput`<sup>Optional</sup> <a name="ConfigItemCustomStatusInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemCustomStatusInput"></a>

```go
func ConfigItemCustomStatusInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConfigItemFieldInput`<sup>Optional</sup> <a name="ConfigItemFieldInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemFieldInput"></a>

```go
func ConfigItemFieldInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConfigItemsApplicableContextInput`<sup>Optional</sup> <a name="ConfigItemsApplicableContextInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemsApplicableContextInput"></a>

```go
func ConfigItemsApplicableContextInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConfigItemsInput`<sup>Optional</sup> <a name="ConfigItemsInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemsInput"></a>

```go
func ConfigItemsInput() interface{}
```

- *Type:* interface{}

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OpsiConfigFieldInput`<sup>Optional</sup> <a name="OpsiConfigFieldInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigFieldInput"></a>

```go
func OpsiConfigFieldInput() *[]*string
```

- *Type:* *[]*string

---

##### `OpsiConfigTypeInput`<sup>Optional</sup> <a name="OpsiConfigTypeInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigTypeInput"></a>

```go
func OpsiConfigTypeInput() *string
```

- *Type:* *string

---

##### `SystemTagsInput`<sup>Optional</sup> <a name="SystemTagsInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.systemTagsInput"></a>

```go
func SystemTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConfigItemCustomStatus`<sup>Required</sup> <a name="ConfigItemCustomStatus" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemCustomStatus"></a>

```go
func ConfigItemCustomStatus() *[]*string
```

- *Type:* *[]*string

---

##### `ConfigItemField`<sup>Required</sup> <a name="ConfigItemField" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemField"></a>

```go
func ConfigItemField() *[]*string
```

- *Type:* *[]*string

---

##### `ConfigItemsApplicableContext`<sup>Required</sup> <a name="ConfigItemsApplicableContext" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.configItemsApplicableContext"></a>

```go
func ConfigItemsApplicableContext() *[]*string
```

- *Type:* *[]*string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OpsiConfigField`<sup>Required</sup> <a name="OpsiConfigField" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigField"></a>

```go
func OpsiConfigField() *[]*string
```

- *Type:* *[]*string

---

##### `OpsiConfigType`<sup>Required</sup> <a name="OpsiConfigType" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.opsiConfigType"></a>

```go
func OpsiConfigType() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.systemTags"></a>

```go
func SystemTags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiOpsiConfigurationConfig <a name="OpsiOpsiConfigurationConfig" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiopsiconfiguration"

&opsiopsiconfiguration.OpsiOpsiConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OpsiConfigType: *string,
	CompartmentId: *string,
	ConfigItemCustomStatus: *[]*string,
	ConfigItemField: *[]*string,
	ConfigItems: interface{},
	ConfigItemsApplicableContext: *[]*string,
	DefinedTags: *map[string]*string,
	Description: *string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	OpsiConfigField: *[]*string,
	SystemTags: *map[string]*string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.opsiConfigType">OpsiConfigType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#opsi_config_type OpsiOpsiConfiguration#opsi_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#compartment_id OpsiOpsiConfiguration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItemCustomStatus">ConfigItemCustomStatus</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_custom_status OpsiOpsiConfiguration#config_item_custom_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItemField">ConfigItemField</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_field OpsiOpsiConfiguration#config_item_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItems">ConfigItems</a></code> | <code>interface{}</code> | config_items block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItemsApplicableContext">ConfigItemsApplicableContext</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_items_applicable_context OpsiOpsiConfiguration#config_items_applicable_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#defined_tags OpsiOpsiConfiguration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#description OpsiOpsiConfiguration#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#display_name OpsiOpsiConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#freeform_tags OpsiOpsiConfiguration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#id OpsiOpsiConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.opsiConfigField">OpsiConfigField</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#opsi_config_field OpsiOpsiConfiguration#opsi_config_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.systemTags">SystemTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#system_tags OpsiOpsiConfiguration#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts">OpsiOpsiConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OpsiConfigType`<sup>Required</sup> <a name="OpsiConfigType" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.opsiConfigType"></a>

```go
OpsiConfigType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#opsi_config_type OpsiOpsiConfiguration#opsi_config_type}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#compartment_id OpsiOpsiConfiguration#compartment_id}.

---

##### `ConfigItemCustomStatus`<sup>Optional</sup> <a name="ConfigItemCustomStatus" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItemCustomStatus"></a>

```go
ConfigItemCustomStatus *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_custom_status OpsiOpsiConfiguration#config_item_custom_status}.

---

##### `ConfigItemField`<sup>Optional</sup> <a name="ConfigItemField" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItemField"></a>

```go
ConfigItemField *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_field OpsiOpsiConfiguration#config_item_field}.

---

##### `ConfigItems`<sup>Optional</sup> <a name="ConfigItems" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItems"></a>

```go
ConfigItems interface{}
```

- *Type:* interface{}

config_items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_items OpsiOpsiConfiguration#config_items}

---

##### `ConfigItemsApplicableContext`<sup>Optional</sup> <a name="ConfigItemsApplicableContext" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.configItemsApplicableContext"></a>

```go
ConfigItemsApplicableContext *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_items_applicable_context OpsiOpsiConfiguration#config_items_applicable_context}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#defined_tags OpsiOpsiConfiguration#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#description OpsiOpsiConfiguration#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#display_name OpsiOpsiConfiguration#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#freeform_tags OpsiOpsiConfiguration#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#id OpsiOpsiConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OpsiConfigField`<sup>Optional</sup> <a name="OpsiConfigField" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.opsiConfigField"></a>

```go
OpsiConfigField *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#opsi_config_field OpsiOpsiConfiguration#opsi_config_field}.

---

##### `SystemTags`<sup>Optional</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.systemTags"></a>

```go
SystemTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#system_tags OpsiOpsiConfiguration#system_tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfig.property.timeouts"></a>

```go
Timeouts OpsiOpsiConfigurationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts">OpsiOpsiConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#timeouts OpsiOpsiConfiguration#timeouts}

---

### OpsiOpsiConfigurationConfigItems <a name="OpsiOpsiConfigurationConfigItems" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiopsiconfiguration"

&opsiopsiconfiguration.OpsiOpsiConfigurationConfigItems {
	ConfigItemType: *string,
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems.property.configItemType">ConfigItemType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_type OpsiOpsiConfiguration#config_item_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#name OpsiOpsiConfiguration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#value OpsiOpsiConfiguration#value}. |

---

##### `ConfigItemType`<sup>Required</sup> <a name="ConfigItemType" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems.property.configItemType"></a>

```go
ConfigItemType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#config_item_type OpsiOpsiConfiguration#config_item_type}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#name OpsiOpsiConfiguration#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItems.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#value OpsiOpsiConfiguration#value}.

---

### OpsiOpsiConfigurationConfigItemsMetadata <a name="OpsiOpsiConfigurationConfigItemsMetadata" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiopsiconfiguration"

&opsiopsiconfiguration.OpsiOpsiConfigurationConfigItemsMetadata {

}
```


### OpsiOpsiConfigurationConfigItemsMetadataUnitDetails <a name="OpsiOpsiConfigurationConfigItemsMetadataUnitDetails" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiopsiconfiguration"

&opsiopsiconfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetails {

}
```


### OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails <a name="OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiopsiconfiguration"

&opsiopsiconfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails {

}
```


### OpsiOpsiConfigurationTimeouts <a name="OpsiOpsiConfigurationTimeouts" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiopsiconfiguration"

&opsiopsiconfiguration.OpsiOpsiConfigurationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#create OpsiOpsiConfiguration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#delete OpsiOpsiConfiguration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#update OpsiOpsiConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#create OpsiOpsiConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#delete OpsiOpsiConfiguration#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_opsi_configuration#update OpsiOpsiConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiOpsiConfigurationConfigItemsList <a name="OpsiOpsiConfigurationConfigItemsList" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiopsiconfiguration"

opsiopsiconfiguration.NewOpsiOpsiConfigurationConfigItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpsiOpsiConfigurationConfigItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.get"></a>

```go
func Get(index *f64) OpsiOpsiConfigurationConfigItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsiOpsiConfigurationConfigItemsMetadataList <a name="OpsiOpsiConfigurationConfigItemsMetadataList" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiopsiconfiguration"

opsiopsiconfiguration.NewOpsiOpsiConfigurationConfigItemsMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpsiOpsiConfigurationConfigItemsMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.get"></a>

```go
func Get(index *f64) OpsiOpsiConfigurationConfigItemsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OpsiOpsiConfigurationConfigItemsMetadataOutputReference <a name="OpsiOpsiConfigurationConfigItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiopsiconfiguration"

opsiopsiconfiguration.NewOpsiOpsiConfigurationConfigItemsMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpsiOpsiConfigurationConfigItemsMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.configItemType">ConfigItemType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.unitDetails">UnitDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList">OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.valueInputDetails">ValueInputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList">OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadata">OpsiOpsiConfigurationConfigItemsMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigItemType`<sup>Required</sup> <a name="ConfigItemType" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.configItemType"></a>

```go
func ConfigItemType() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `UnitDetails`<sup>Required</sup> <a name="UnitDetails" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.unitDetails"></a>

```go
func UnitDetails() OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList">OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList</a>

---

##### `ValueInputDetails`<sup>Required</sup> <a name="ValueInputDetails" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.valueInputDetails"></a>

```go
func ValueInputDetails() OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList">OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsiOpsiConfigurationConfigItemsMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadata">OpsiOpsiConfigurationConfigItemsMetadata</a>

---


### OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList <a name="OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiopsiconfiguration"

opsiopsiconfiguration.NewOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.get"></a>

```go
func Get(index *f64) OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference <a name="OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiopsiconfiguration"

opsiopsiconfiguration.NewOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetails">OpsiOpsiConfigurationConfigItemsMetadataUnitDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsiOpsiConfigurationConfigItemsMetadataUnitDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataUnitDetails">OpsiOpsiConfigurationConfigItemsMetadataUnitDetails</a>

---


### OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList <a name="OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiopsiconfiguration"

opsiopsiconfiguration.NewOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.get"></a>

```go
func Get(index *f64) OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference <a name="OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiopsiconfiguration"

opsiopsiconfiguration.NewOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType">AllowedValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue">MaxValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.minValue">MinValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues">PossibleValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails">OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedValueType`<sup>Required</sup> <a name="AllowedValueType" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType"></a>

```go
func AllowedValueType() *string
```

- *Type:* *string

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue"></a>

```go
func MaxValue() *string
```

- *Type:* *string

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.minValue"></a>

```go
func MinValue() *string
```

- *Type:* *string

---

##### `PossibleValues`<sup>Required</sup> <a name="PossibleValues" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues"></a>

```go
func PossibleValues() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails">OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails</a>

---


### OpsiOpsiConfigurationConfigItemsOutputReference <a name="OpsiOpsiConfigurationConfigItemsOutputReference" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiopsiconfiguration"

opsiopsiconfiguration.NewOpsiOpsiConfigurationConfigItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpsiOpsiConfigurationConfigItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.applicableContexts">ApplicableContexts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.metadata">Metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList">OpsiOpsiConfigurationConfigItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.configItemTypeInput">ConfigItemTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.configItemType">ConfigItemType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicableContexts`<sup>Required</sup> <a name="ApplicableContexts" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.applicableContexts"></a>

```go
func ApplicableContexts() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.metadata"></a>

```go
func Metadata() OpsiOpsiConfigurationConfigItemsMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsMetadataList">OpsiOpsiConfigurationConfigItemsMetadataList</a>

---

##### `ConfigItemTypeInput`<sup>Optional</sup> <a name="ConfigItemTypeInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.configItemTypeInput"></a>

```go
func ConfigItemTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ConfigItemType`<sup>Required</sup> <a name="ConfigItemType" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.configItemType"></a>

```go
func ConfigItemType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationConfigItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsiOpsiConfigurationTimeoutsOutputReference <a name="OpsiOpsiConfigurationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiopsiconfiguration"

opsiopsiconfiguration.NewOpsiOpsiConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsiOpsiConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiOpsiConfiguration.OpsiOpsiConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



