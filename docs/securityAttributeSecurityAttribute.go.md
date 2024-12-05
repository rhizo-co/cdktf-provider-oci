# `securityAttributeSecurityAttribute` Submodule <a name="`securityAttributeSecurityAttribute` Submodule" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityAttributeSecurityAttribute <a name="SecurityAttributeSecurityAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute oci_security_attribute_security_attribute}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/securityattributesecurityattribute"

securityattributesecurityattribute.NewSecurityAttributeSecurityAttribute(scope Construct, id *string, config SecurityAttributeSecurityAttributeConfig) SecurityAttributeSecurityAttribute
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig">SecurityAttributeSecurityAttributeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig">SecurityAttributeSecurityAttributeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.putValidator">PutValidator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetIsRetired">ResetIsRetired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetValidator">ResetValidator</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.putTimeouts"></a>

```go
func PutTimeouts(value SecurityAttributeSecurityAttributeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts">SecurityAttributeSecurityAttributeTimeouts</a>

---

##### `PutValidator` <a name="PutValidator" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.putValidator"></a>

```go
func PutValidator(value SecurityAttributeSecurityAttributeValidator)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.putValidator.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator">SecurityAttributeSecurityAttributeValidator</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetId"></a>

```go
func ResetId()
```

##### `ResetIsRetired` <a name="ResetIsRetired" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetIsRetired"></a>

```go
func ResetIsRetired()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetValidator` <a name="ResetValidator" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.resetValidator"></a>

```go
func ResetValidator()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityAttributeSecurityAttribute resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/securityattributesecurityattribute"

securityattributesecurityattribute.SecurityAttributeSecurityAttribute_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/securityattributesecurityattribute"

securityattributesecurityattribute.SecurityAttributeSecurityAttribute_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/securityattributesecurityattribute"

securityattributesecurityattribute.SecurityAttributeSecurityAttribute_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/securityattributesecurityattribute"

securityattributesecurityattribute.SecurityAttributeSecurityAttribute_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SecurityAttributeSecurityAttribute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecurityAttributeSecurityAttribute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecurityAttributeSecurityAttribute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SecurityAttributeSecurityAttribute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.securityAttributeNamespaceName">SecurityAttributeNamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference">SecurityAttributeSecurityAttributeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.validator">Validator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference">SecurityAttributeSecurityAttributeValidatorOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.isRetiredInput">IsRetiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.securityAttributeNamespaceIdInput">SecurityAttributeNamespaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.validatorInput">ValidatorInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator">SecurityAttributeSecurityAttributeValidator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.isRetired">IsRetired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.securityAttributeNamespaceId">SecurityAttributeNamespaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `SecurityAttributeNamespaceName`<sup>Required</sup> <a name="SecurityAttributeNamespaceName" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.securityAttributeNamespaceName"></a>

```go
func SecurityAttributeNamespaceName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.timeouts"></a>

```go
func Timeouts() SecurityAttributeSecurityAttributeTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference">SecurityAttributeSecurityAttributeTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Validator`<sup>Required</sup> <a name="Validator" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.validator"></a>

```go
func Validator() SecurityAttributeSecurityAttributeValidatorOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference">SecurityAttributeSecurityAttributeValidatorOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsRetiredInput`<sup>Optional</sup> <a name="IsRetiredInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.isRetiredInput"></a>

```go
func IsRetiredInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecurityAttributeNamespaceIdInput`<sup>Optional</sup> <a name="SecurityAttributeNamespaceIdInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.securityAttributeNamespaceIdInput"></a>

```go
func SecurityAttributeNamespaceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ValidatorInput`<sup>Optional</sup> <a name="ValidatorInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.validatorInput"></a>

```go
func ValidatorInput() SecurityAttributeSecurityAttributeValidator
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator">SecurityAttributeSecurityAttributeValidator</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsRetired`<sup>Required</sup> <a name="IsRetired" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.isRetired"></a>

```go
func IsRetired() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecurityAttributeNamespaceId`<sup>Required</sup> <a name="SecurityAttributeNamespaceId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.securityAttributeNamespaceId"></a>

```go
func SecurityAttributeNamespaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttribute.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityAttributeSecurityAttributeConfig <a name="SecurityAttributeSecurityAttributeConfig" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/securityattributesecurityattribute"

&securityattributesecurityattribute.SecurityAttributeSecurityAttributeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	Name: *string,
	SecurityAttributeNamespaceId: *string,
	Id: *string,
	IsRetired: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts,
	Validator: github.com/rhizo-co/cdktf-provider-oci-go/oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#description SecurityAttributeSecurityAttribute#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#name SecurityAttributeSecurityAttribute#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.securityAttributeNamespaceId">SecurityAttributeNamespaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#security_attribute_namespace_id SecurityAttributeSecurityAttribute#security_attribute_namespace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#id SecurityAttributeSecurityAttribute#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.isRetired">IsRetired</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#is_retired SecurityAttributeSecurityAttribute#is_retired}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts">SecurityAttributeSecurityAttributeTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.validator">Validator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator">SecurityAttributeSecurityAttributeValidator</a></code> | validator block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#description SecurityAttributeSecurityAttribute#description}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#name SecurityAttributeSecurityAttribute#name}.

---

##### `SecurityAttributeNamespaceId`<sup>Required</sup> <a name="SecurityAttributeNamespaceId" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.securityAttributeNamespaceId"></a>

```go
SecurityAttributeNamespaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#security_attribute_namespace_id SecurityAttributeSecurityAttribute#security_attribute_namespace_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#id SecurityAttributeSecurityAttribute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsRetired`<sup>Optional</sup> <a name="IsRetired" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.isRetired"></a>

```go
IsRetired interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#is_retired SecurityAttributeSecurityAttribute#is_retired}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.timeouts"></a>

```go
Timeouts SecurityAttributeSecurityAttributeTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts">SecurityAttributeSecurityAttributeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#timeouts SecurityAttributeSecurityAttribute#timeouts}

---

##### `Validator`<sup>Optional</sup> <a name="Validator" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeConfig.property.validator"></a>

```go
Validator SecurityAttributeSecurityAttributeValidator
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator">SecurityAttributeSecurityAttributeValidator</a>

validator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#validator SecurityAttributeSecurityAttribute#validator}

---

### SecurityAttributeSecurityAttributeTimeouts <a name="SecurityAttributeSecurityAttributeTimeouts" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/securityattributesecurityattribute"

&securityattributesecurityattribute.SecurityAttributeSecurityAttributeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#create SecurityAttributeSecurityAttribute#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#delete SecurityAttributeSecurityAttribute#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#update SecurityAttributeSecurityAttribute#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#create SecurityAttributeSecurityAttribute#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#delete SecurityAttributeSecurityAttribute#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#update SecurityAttributeSecurityAttribute#update}.

---

### SecurityAttributeSecurityAttributeValidator <a name="SecurityAttributeSecurityAttributeValidator" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/securityattributesecurityattribute"

&securityattributesecurityattribute.SecurityAttributeSecurityAttributeValidator {
	ValidatorType: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator.property.validatorType">ValidatorType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#validator_type SecurityAttributeSecurityAttribute#validator_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#values SecurityAttributeSecurityAttribute#values}. |

---

##### `ValidatorType`<sup>Required</sup> <a name="ValidatorType" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator.property.validatorType"></a>

```go
ValidatorType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#validator_type SecurityAttributeSecurityAttribute#validator_type}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/security_attribute_security_attribute#values SecurityAttributeSecurityAttribute#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityAttributeSecurityAttributeTimeoutsOutputReference <a name="SecurityAttributeSecurityAttributeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/securityattributesecurityattribute"

securityattributesecurityattribute.NewSecurityAttributeSecurityAttributeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityAttributeSecurityAttributeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityAttributeSecurityAttributeValidatorOutputReference <a name="SecurityAttributeSecurityAttributeValidatorOutputReference" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/securityattributesecurityattribute"

securityattributesecurityattribute.NewSecurityAttributeSecurityAttributeValidatorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityAttributeSecurityAttributeValidatorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValues` <a name="ResetValues" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.validatorTypeInput">ValidatorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.validatorType">ValidatorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator">SecurityAttributeSecurityAttributeValidator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValidatorTypeInput`<sup>Optional</sup> <a name="ValidatorTypeInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.validatorTypeInput"></a>

```go
func ValidatorTypeInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValidatorType`<sup>Required</sup> <a name="ValidatorType" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.validatorType"></a>

```go
func ValidatorType() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidatorOutputReference.property.internalValue"></a>

```go
func InternalValue() SecurityAttributeSecurityAttributeValidator
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.securityAttributeSecurityAttribute.SecurityAttributeSecurityAttributeValidator">SecurityAttributeSecurityAttributeValidator</a>

---



