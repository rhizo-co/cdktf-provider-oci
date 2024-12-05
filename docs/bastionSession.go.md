# `bastionSession` Submodule <a name="`bastionSession` Submodule" id="rhizo-co-terraform-provider-oci.bastionSession"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BastionSession <a name="BastionSession" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session oci_bastion_session}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bastionsession"

bastionsession.NewBastionSession(scope Construct, id *string, config BastionSessionConfig) BastionSession
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig">BastionSessionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig">BastionSessionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putKeyDetails">PutKeyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putTargetResourceDetails">PutTargetResourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetKeyType">ResetKeyType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetSessionTtlInSeconds">ResetSessionTtlInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKeyDetails` <a name="PutKeyDetails" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putKeyDetails"></a>

```go
func PutKeyDetails(value BastionSessionKeyDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putKeyDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetails">BastionSessionKeyDetails</a>

---

##### `PutTargetResourceDetails` <a name="PutTargetResourceDetails" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putTargetResourceDetails"></a>

```go
func PutTargetResourceDetails(value BastionSessionTargetResourceDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putTargetResourceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails">BastionSessionTargetResourceDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putTimeouts"></a>

```go
func PutTimeouts(value BastionSessionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts">BastionSessionTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetId"></a>

```go
func ResetId()
```

##### `ResetKeyType` <a name="ResetKeyType" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetKeyType"></a>

```go
func ResetKeyType()
```

##### `ResetSessionTtlInSeconds` <a name="ResetSessionTtlInSeconds" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetSessionTtlInSeconds"></a>

```go
func ResetSessionTtlInSeconds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BastionSession resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bastionsession"

bastionsession.BastionSession_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bastionsession"

bastionsession.BastionSession_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bastionsession"

bastionsession.BastionSession_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bastionsession"

bastionsession.BastionSession_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BastionSession resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BastionSession to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BastionSession that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BastionSession to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.bastionName">BastionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.bastionPublicHostKeyInfo">BastionPublicHostKeyInfo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.bastionUserName">BastionUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.keyDetails">KeyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference">BastionSessionKeyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.sshMetadata">SshMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.targetResourceDetails">TargetResourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference">BastionSessionTargetResourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference">BastionSessionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.bastionIdInput">BastionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.keyDetailsInput">KeyDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetails">BastionSessionKeyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.keyTypeInput">KeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.sessionTtlInSecondsInput">SessionTtlInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.targetResourceDetailsInput">TargetResourceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails">BastionSessionTargetResourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.bastionId">BastionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.sessionTtlInSeconds">SessionTtlInSeconds</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BastionName`<sup>Required</sup> <a name="BastionName" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.bastionName"></a>

```go
func BastionName() *string
```

- *Type:* *string

---

##### `BastionPublicHostKeyInfo`<sup>Required</sup> <a name="BastionPublicHostKeyInfo" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.bastionPublicHostKeyInfo"></a>

```go
func BastionPublicHostKeyInfo() *string
```

- *Type:* *string

---

##### `BastionUserName`<sup>Required</sup> <a name="BastionUserName" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.bastionUserName"></a>

```go
func BastionUserName() *string
```

- *Type:* *string

---

##### `KeyDetails`<sup>Required</sup> <a name="KeyDetails" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.keyDetails"></a>

```go
func KeyDetails() BastionSessionKeyDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference">BastionSessionKeyDetailsOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `SshMetadata`<sup>Required</sup> <a name="SshMetadata" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.sshMetadata"></a>

```go
func SshMetadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TargetResourceDetails`<sup>Required</sup> <a name="TargetResourceDetails" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.targetResourceDetails"></a>

```go
func TargetResourceDetails() BastionSessionTargetResourceDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference">BastionSessionTargetResourceDetailsOutputReference</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.timeouts"></a>

```go
func Timeouts() BastionSessionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference">BastionSessionTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `BastionIdInput`<sup>Optional</sup> <a name="BastionIdInput" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.bastionIdInput"></a>

```go
func BastionIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyDetailsInput`<sup>Optional</sup> <a name="KeyDetailsInput" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.keyDetailsInput"></a>

```go
func KeyDetailsInput() BastionSessionKeyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetails">BastionSessionKeyDetails</a>

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.keyTypeInput"></a>

```go
func KeyTypeInput() *string
```

- *Type:* *string

---

##### `SessionTtlInSecondsInput`<sup>Optional</sup> <a name="SessionTtlInSecondsInput" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.sessionTtlInSecondsInput"></a>

```go
func SessionTtlInSecondsInput() *f64
```

- *Type:* *f64

---

##### `TargetResourceDetailsInput`<sup>Optional</sup> <a name="TargetResourceDetailsInput" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.targetResourceDetailsInput"></a>

```go
func TargetResourceDetailsInput() BastionSessionTargetResourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails">BastionSessionTargetResourceDetails</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BastionId`<sup>Required</sup> <a name="BastionId" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.bastionId"></a>

```go
func BastionId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `SessionTtlInSeconds`<sup>Required</sup> <a name="SessionTtlInSeconds" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.sessionTtlInSeconds"></a>

```go
func SessionTtlInSeconds() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BastionSessionConfig <a name="BastionSessionConfig" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bastionsession"

&bastionsession.BastionSessionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BastionId: *string,
	KeyDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.bastionSession.BastionSessionKeyDetails,
	TargetResourceDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.bastionSession.BastionSessionTargetResourceDetails,
	DisplayName: *string,
	Id: *string,
	KeyType: *string,
	SessionTtlInSeconds: *f64,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.bastionSession.BastionSessionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.bastionId">BastionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#bastion_id BastionSession#bastion_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.keyDetails">KeyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetails">BastionSessionKeyDetails</a></code> | key_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.targetResourceDetails">TargetResourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails">BastionSessionTargetResourceDetails</a></code> | target_resource_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#display_name BastionSession#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#id BastionSession#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.keyType">KeyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#key_type BastionSession#key_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.sessionTtlInSeconds">SessionTtlInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#session_ttl_in_seconds BastionSession#session_ttl_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts">BastionSessionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BastionId`<sup>Required</sup> <a name="BastionId" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.bastionId"></a>

```go
BastionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#bastion_id BastionSession#bastion_id}.

---

##### `KeyDetails`<sup>Required</sup> <a name="KeyDetails" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.keyDetails"></a>

```go
KeyDetails BastionSessionKeyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetails">BastionSessionKeyDetails</a>

key_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#key_details BastionSession#key_details}

---

##### `TargetResourceDetails`<sup>Required</sup> <a name="TargetResourceDetails" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.targetResourceDetails"></a>

```go
TargetResourceDetails BastionSessionTargetResourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails">BastionSessionTargetResourceDetails</a>

target_resource_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_details BastionSession#target_resource_details}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#display_name BastionSession#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#id BastionSession#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.keyType"></a>

```go
KeyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#key_type BastionSession#key_type}.

---

##### `SessionTtlInSeconds`<sup>Optional</sup> <a name="SessionTtlInSeconds" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.sessionTtlInSeconds"></a>

```go
SessionTtlInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#session_ttl_in_seconds BastionSession#session_ttl_in_seconds}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.timeouts"></a>

```go
Timeouts BastionSessionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts">BastionSessionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#timeouts BastionSession#timeouts}

---

### BastionSessionKeyDetails <a name="BastionSessionKeyDetails" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bastionsession"

&bastionsession.BastionSessionKeyDetails {
	PublicKeyContent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetails.property.publicKeyContent">PublicKeyContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#public_key_content BastionSession#public_key_content}. |

---

##### `PublicKeyContent`<sup>Required</sup> <a name="PublicKeyContent" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetails.property.publicKeyContent"></a>

```go
PublicKeyContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#public_key_content BastionSession#public_key_content}.

---

### BastionSessionTargetResourceDetails <a name="BastionSessionTargetResourceDetails" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bastionsession"

&bastionsession.BastionSessionTargetResourceDetails {
	SessionType: *string,
	TargetResourceFqdn: *string,
	TargetResourceId: *string,
	TargetResourceOperatingSystemUserName: *string,
	TargetResourcePort: *f64,
	TargetResourcePrivateIpAddress: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.sessionType">SessionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#session_type BastionSession#session_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.targetResourceFqdn">TargetResourceFqdn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_fqdn BastionSession#target_resource_fqdn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_id BastionSession#target_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.targetResourceOperatingSystemUserName">TargetResourceOperatingSystemUserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_operating_system_user_name BastionSession#target_resource_operating_system_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.targetResourcePort">TargetResourcePort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_port BastionSession#target_resource_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.targetResourcePrivateIpAddress">TargetResourcePrivateIpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_private_ip_address BastionSession#target_resource_private_ip_address}. |

---

##### `SessionType`<sup>Required</sup> <a name="SessionType" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.sessionType"></a>

```go
SessionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#session_type BastionSession#session_type}.

---

##### `TargetResourceFqdn`<sup>Optional</sup> <a name="TargetResourceFqdn" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.targetResourceFqdn"></a>

```go
TargetResourceFqdn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_fqdn BastionSession#target_resource_fqdn}.

---

##### `TargetResourceId`<sup>Optional</sup> <a name="TargetResourceId" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.targetResourceId"></a>

```go
TargetResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_id BastionSession#target_resource_id}.

---

##### `TargetResourceOperatingSystemUserName`<sup>Optional</sup> <a name="TargetResourceOperatingSystemUserName" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.targetResourceOperatingSystemUserName"></a>

```go
TargetResourceOperatingSystemUserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_operating_system_user_name BastionSession#target_resource_operating_system_user_name}.

---

##### `TargetResourcePort`<sup>Optional</sup> <a name="TargetResourcePort" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.targetResourcePort"></a>

```go
TargetResourcePort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_port BastionSession#target_resource_port}.

---

##### `TargetResourcePrivateIpAddress`<sup>Optional</sup> <a name="TargetResourcePrivateIpAddress" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.targetResourcePrivateIpAddress"></a>

```go
TargetResourcePrivateIpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_private_ip_address BastionSession#target_resource_private_ip_address}.

---

### BastionSessionTimeouts <a name="BastionSessionTimeouts" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bastionsession"

&bastionsession.BastionSessionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#create BastionSession#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#delete BastionSession#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#update BastionSession#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#create BastionSession#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#delete BastionSession#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#update BastionSession#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BastionSessionKeyDetailsOutputReference <a name="BastionSessionKeyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bastionsession"

bastionsession.NewBastionSessionKeyDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BastionSessionKeyDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.property.publicKeyContentInput">PublicKeyContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.property.publicKeyContent">PublicKeyContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetails">BastionSessionKeyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicKeyContentInput`<sup>Optional</sup> <a name="PublicKeyContentInput" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.property.publicKeyContentInput"></a>

```go
func PublicKeyContentInput() *string
```

- *Type:* *string

---

##### `PublicKeyContent`<sup>Required</sup> <a name="PublicKeyContent" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.property.publicKeyContent"></a>

```go
func PublicKeyContent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() BastionSessionKeyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetails">BastionSessionKeyDetails</a>

---


### BastionSessionTargetResourceDetailsOutputReference <a name="BastionSessionTargetResourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bastionsession"

bastionsession.NewBastionSessionTargetResourceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BastionSessionTargetResourceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resetTargetResourceFqdn">ResetTargetResourceFqdn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resetTargetResourceId">ResetTargetResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resetTargetResourceOperatingSystemUserName">ResetTargetResourceOperatingSystemUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resetTargetResourcePort">ResetTargetResourcePort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resetTargetResourcePrivateIpAddress">ResetTargetResourcePrivateIpAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetResourceFqdn` <a name="ResetTargetResourceFqdn" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resetTargetResourceFqdn"></a>

```go
func ResetTargetResourceFqdn()
```

##### `ResetTargetResourceId` <a name="ResetTargetResourceId" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resetTargetResourceId"></a>

```go
func ResetTargetResourceId()
```

##### `ResetTargetResourceOperatingSystemUserName` <a name="ResetTargetResourceOperatingSystemUserName" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resetTargetResourceOperatingSystemUserName"></a>

```go
func ResetTargetResourceOperatingSystemUserName()
```

##### `ResetTargetResourcePort` <a name="ResetTargetResourcePort" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resetTargetResourcePort"></a>

```go
func ResetTargetResourcePort()
```

##### `ResetTargetResourcePrivateIpAddress` <a name="ResetTargetResourcePrivateIpAddress" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resetTargetResourcePrivateIpAddress"></a>

```go
func ResetTargetResourcePrivateIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceDisplayName">TargetResourceDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.sessionTypeInput">SessionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceFqdnInput">TargetResourceFqdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceOperatingSystemUserNameInput">TargetResourceOperatingSystemUserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourcePortInput">TargetResourcePortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourcePrivateIpAddressInput">TargetResourcePrivateIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.sessionType">SessionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceFqdn">TargetResourceFqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceOperatingSystemUserName">TargetResourceOperatingSystemUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourcePort">TargetResourcePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourcePrivateIpAddress">TargetResourcePrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails">BastionSessionTargetResourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetResourceDisplayName`<sup>Required</sup> <a name="TargetResourceDisplayName" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceDisplayName"></a>

```go
func TargetResourceDisplayName() *string
```

- *Type:* *string

---

##### `SessionTypeInput`<sup>Optional</sup> <a name="SessionTypeInput" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.sessionTypeInput"></a>

```go
func SessionTypeInput() *string
```

- *Type:* *string

---

##### `TargetResourceFqdnInput`<sup>Optional</sup> <a name="TargetResourceFqdnInput" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceFqdnInput"></a>

```go
func TargetResourceFqdnInput() *string
```

- *Type:* *string

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceIdInput"></a>

```go
func TargetResourceIdInput() *string
```

- *Type:* *string

---

##### `TargetResourceOperatingSystemUserNameInput`<sup>Optional</sup> <a name="TargetResourceOperatingSystemUserNameInput" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceOperatingSystemUserNameInput"></a>

```go
func TargetResourceOperatingSystemUserNameInput() *string
```

- *Type:* *string

---

##### `TargetResourcePortInput`<sup>Optional</sup> <a name="TargetResourcePortInput" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourcePortInput"></a>

```go
func TargetResourcePortInput() *f64
```

- *Type:* *f64

---

##### `TargetResourcePrivateIpAddressInput`<sup>Optional</sup> <a name="TargetResourcePrivateIpAddressInput" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourcePrivateIpAddressInput"></a>

```go
func TargetResourcePrivateIpAddressInput() *string
```

- *Type:* *string

---

##### `SessionType`<sup>Required</sup> <a name="SessionType" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.sessionType"></a>

```go
func SessionType() *string
```

- *Type:* *string

---

##### `TargetResourceFqdn`<sup>Required</sup> <a name="TargetResourceFqdn" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceFqdn"></a>

```go
func TargetResourceFqdn() *string
```

- *Type:* *string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceId"></a>

```go
func TargetResourceId() *string
```

- *Type:* *string

---

##### `TargetResourceOperatingSystemUserName`<sup>Required</sup> <a name="TargetResourceOperatingSystemUserName" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceOperatingSystemUserName"></a>

```go
func TargetResourceOperatingSystemUserName() *string
```

- *Type:* *string

---

##### `TargetResourcePort`<sup>Required</sup> <a name="TargetResourcePort" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourcePort"></a>

```go
func TargetResourcePort() *f64
```

- *Type:* *f64

---

##### `TargetResourcePrivateIpAddress`<sup>Required</sup> <a name="TargetResourcePrivateIpAddress" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourcePrivateIpAddress"></a>

```go
func TargetResourcePrivateIpAddress() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() BastionSessionTargetResourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails">BastionSessionTargetResourceDetails</a>

---


### BastionSessionTimeoutsOutputReference <a name="BastionSessionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bastionsession"

bastionsession.NewBastionSessionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BastionSessionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



