# `coreDefaultDhcpOptions` Submodule <a name="`coreDefaultDhcpOptions` Submodule" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreDefaultDhcpOptions <a name="CoreDefaultDhcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options oci_core_default_dhcp_options}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultdhcpoptions"

coredefaultdhcpoptions.NewCoreDefaultDhcpOptions(scope Construct, id *string, config CoreDefaultDhcpOptionsConfig) CoreDefaultDhcpOptions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig">CoreDefaultDhcpOptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig">CoreDefaultDhcpOptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetDomainNameType">ResetDomainNameType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOptions` <a name="PutOptions" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.putOptions"></a>

```go
func PutOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.putOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.putTimeouts"></a>

```go
func PutTimeouts(value CoreDefaultDhcpOptionsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts">CoreDefaultDhcpOptionsTimeouts</a>

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDomainNameType` <a name="ResetDomainNameType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetDomainNameType"></a>

```go
func ResetDomainNameType()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreDefaultDhcpOptions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultdhcpoptions"

coredefaultdhcpoptions.CoreDefaultDhcpOptions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultdhcpoptions"

coredefaultdhcpoptions.CoreDefaultDhcpOptions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultdhcpoptions"

coredefaultdhcpoptions.CoreDefaultDhcpOptions_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultdhcpoptions"

coredefaultdhcpoptions.CoreDefaultDhcpOptions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CoreDefaultDhcpOptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CoreDefaultDhcpOptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CoreDefaultDhcpOptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CoreDefaultDhcpOptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.options">Options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList">CoreDefaultDhcpOptionsOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference">CoreDefaultDhcpOptionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.domainNameTypeInput">DomainNameTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.manageDefaultResourceIdInput">ManageDefaultResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.optionsInput">OptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.domainNameType">DomainNameType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.manageDefaultResourceId">ManageDefaultResourceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Options`<sup>Required</sup> <a name="Options" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.options"></a>

```go
func Options() CoreDefaultDhcpOptionsOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList">CoreDefaultDhcpOptionsOptionsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.timeouts"></a>

```go
func Timeouts() CoreDefaultDhcpOptionsTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference">CoreDefaultDhcpOptionsTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DomainNameTypeInput`<sup>Optional</sup> <a name="DomainNameTypeInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.domainNameTypeInput"></a>

```go
func DomainNameTypeInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManageDefaultResourceIdInput`<sup>Optional</sup> <a name="ManageDefaultResourceIdInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.manageDefaultResourceIdInput"></a>

```go
func ManageDefaultResourceIdInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.optionsInput"></a>

```go
func OptionsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DomainNameType`<sup>Required</sup> <a name="DomainNameType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.domainNameType"></a>

```go
func DomainNameType() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManageDefaultResourceId`<sup>Required</sup> <a name="ManageDefaultResourceId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.manageDefaultResourceId"></a>

```go
func ManageDefaultResourceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreDefaultDhcpOptionsConfig <a name="CoreDefaultDhcpOptionsConfig" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultdhcpoptions"

&coredefaultdhcpoptions.CoreDefaultDhcpOptionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManageDefaultResourceId: *string,
	Options: interface{},
	CompartmentId: *string,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	DomainNameType: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.manageDefaultResourceId">ManageDefaultResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#manage_default_resource_id CoreDefaultDhcpOptions#manage_default_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.options">Options</a></code> | <code>interface{}</code> | options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#compartment_id CoreDefaultDhcpOptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#defined_tags CoreDefaultDhcpOptions#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#display_name CoreDefaultDhcpOptions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.domainNameType">DomainNameType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#domain_name_type CoreDefaultDhcpOptions#domain_name_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#freeform_tags CoreDefaultDhcpOptions#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#id CoreDefaultDhcpOptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts">CoreDefaultDhcpOptionsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManageDefaultResourceId`<sup>Required</sup> <a name="ManageDefaultResourceId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.manageDefaultResourceId"></a>

```go
ManageDefaultResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#manage_default_resource_id CoreDefaultDhcpOptions#manage_default_resource_id}.

---

##### `Options`<sup>Required</sup> <a name="Options" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.options"></a>

```go
Options interface{}
```

- *Type:* interface{}

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#options CoreDefaultDhcpOptions#options}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#compartment_id CoreDefaultDhcpOptions#compartment_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#defined_tags CoreDefaultDhcpOptions#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#display_name CoreDefaultDhcpOptions#display_name}.

---

##### `DomainNameType`<sup>Optional</sup> <a name="DomainNameType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.domainNameType"></a>

```go
DomainNameType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#domain_name_type CoreDefaultDhcpOptions#domain_name_type}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#freeform_tags CoreDefaultDhcpOptions#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#id CoreDefaultDhcpOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.timeouts"></a>

```go
Timeouts CoreDefaultDhcpOptionsTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts">CoreDefaultDhcpOptionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#timeouts CoreDefaultDhcpOptions#timeouts}

---

### CoreDefaultDhcpOptionsOptions <a name="CoreDefaultDhcpOptionsOptions" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultdhcpoptions"

&coredefaultdhcpoptions.CoreDefaultDhcpOptionsOptions {
	Type: *string,
	CustomDnsServers: *[]*string,
	SearchDomainNames: *[]*string,
	ServerType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#type CoreDefaultDhcpOptions#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.customDnsServers">CustomDnsServers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#custom_dns_servers CoreDefaultDhcpOptions#custom_dns_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.searchDomainNames">SearchDomainNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#search_domain_names CoreDefaultDhcpOptions#search_domain_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.serverType">ServerType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#server_type CoreDefaultDhcpOptions#server_type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#type CoreDefaultDhcpOptions#type}.

---

##### `CustomDnsServers`<sup>Optional</sup> <a name="CustomDnsServers" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.customDnsServers"></a>

```go
CustomDnsServers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#custom_dns_servers CoreDefaultDhcpOptions#custom_dns_servers}.

---

##### `SearchDomainNames`<sup>Optional</sup> <a name="SearchDomainNames" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.searchDomainNames"></a>

```go
SearchDomainNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#search_domain_names CoreDefaultDhcpOptions#search_domain_names}.

---

##### `ServerType`<sup>Optional</sup> <a name="ServerType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.serverType"></a>

```go
ServerType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#server_type CoreDefaultDhcpOptions#server_type}.

---

### CoreDefaultDhcpOptionsTimeouts <a name="CoreDefaultDhcpOptionsTimeouts" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultdhcpoptions"

&coredefaultdhcpoptions.CoreDefaultDhcpOptionsTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#create CoreDefaultDhcpOptions#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#delete CoreDefaultDhcpOptions#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#update CoreDefaultDhcpOptions#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#create CoreDefaultDhcpOptions#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#delete CoreDefaultDhcpOptions#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#update CoreDefaultDhcpOptions#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreDefaultDhcpOptionsOptionsList <a name="CoreDefaultDhcpOptionsOptionsList" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultdhcpoptions"

coredefaultdhcpoptions.NewCoreDefaultDhcpOptionsOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CoreDefaultDhcpOptionsOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.get"></a>

```go
func Get(index *f64) CoreDefaultDhcpOptionsOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CoreDefaultDhcpOptionsOptionsOutputReference <a name="CoreDefaultDhcpOptionsOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultdhcpoptions"

coredefaultdhcpoptions.NewCoreDefaultDhcpOptionsOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CoreDefaultDhcpOptionsOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resetCustomDnsServers">ResetCustomDnsServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resetSearchDomainNames">ResetSearchDomainNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resetServerType">ResetServerType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomDnsServers` <a name="ResetCustomDnsServers" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resetCustomDnsServers"></a>

```go
func ResetCustomDnsServers()
```

##### `ResetSearchDomainNames` <a name="ResetSearchDomainNames" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resetSearchDomainNames"></a>

```go
func ResetSearchDomainNames()
```

##### `ResetServerType` <a name="ResetServerType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resetServerType"></a>

```go
func ResetServerType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.customDnsServersInput">CustomDnsServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.searchDomainNamesInput">SearchDomainNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.serverTypeInput">ServerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.customDnsServers">CustomDnsServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.searchDomainNames">SearchDomainNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.serverType">ServerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomDnsServersInput`<sup>Optional</sup> <a name="CustomDnsServersInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.customDnsServersInput"></a>

```go
func CustomDnsServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `SearchDomainNamesInput`<sup>Optional</sup> <a name="SearchDomainNamesInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.searchDomainNamesInput"></a>

```go
func SearchDomainNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServerTypeInput`<sup>Optional</sup> <a name="ServerTypeInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.serverTypeInput"></a>

```go
func ServerTypeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CustomDnsServers`<sup>Required</sup> <a name="CustomDnsServers" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.customDnsServers"></a>

```go
func CustomDnsServers() *[]*string
```

- *Type:* *[]*string

---

##### `SearchDomainNames`<sup>Required</sup> <a name="SearchDomainNames" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.searchDomainNames"></a>

```go
func SearchDomainNames() *[]*string
```

- *Type:* *[]*string

---

##### `ServerType`<sup>Required</sup> <a name="ServerType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.serverType"></a>

```go
func ServerType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CoreDefaultDhcpOptionsTimeoutsOutputReference <a name="CoreDefaultDhcpOptionsTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultdhcpoptions"

coredefaultdhcpoptions.NewCoreDefaultDhcpOptionsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreDefaultDhcpOptionsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



