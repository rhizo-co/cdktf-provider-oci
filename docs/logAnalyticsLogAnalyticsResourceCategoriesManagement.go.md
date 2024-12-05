# `logAnalyticsLogAnalyticsResourceCategoriesManagement` Submodule <a name="`logAnalyticsLogAnalyticsResourceCategoriesManagement` Submodule" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsLogAnalyticsResourceCategoriesManagement <a name="LogAnalyticsLogAnalyticsResourceCategoriesManagement" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management oci_log_analytics_log_analytics_resource_categories_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsresourcecategoriesmanagement"

loganalyticsloganalyticsresourcecategoriesmanagement.NewLogAnalyticsLogAnalyticsResourceCategoriesManagement(scope Construct, id *string, config LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig) LogAnalyticsLogAnalyticsResourceCategoriesManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig">LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig">LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.putTimeouts"></a>

```go
func PutTimeouts(value LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts">LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogAnalyticsLogAnalyticsResourceCategoriesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsresourcecategoriesmanagement"

loganalyticsloganalyticsresourcecategoriesmanagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsresourcecategoriesmanagement"

loganalyticsloganalyticsresourcecategoriesmanagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsresourcecategoriesmanagement"

loganalyticsloganalyticsresourcecategoriesmanagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsresourcecategoriesmanagement"

loganalyticsloganalyticsresourcecategoriesmanagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LogAnalyticsLogAnalyticsResourceCategoriesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LogAnalyticsLogAnalyticsResourceCategoriesManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LogAnalyticsLogAnalyticsResourceCategoriesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsLogAnalyticsResourceCategoriesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference">LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceCategoriesInput">ResourceCategoriesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceCategories">ResourceCategories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.timeouts"></a>

```go
func Timeouts() LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference">LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ResourceCategoriesInput`<sup>Optional</sup> <a name="ResourceCategoriesInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceCategoriesInput"></a>

```go
func ResourceCategoriesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ResourceCategories`<sup>Required</sup> <a name="ResourceCategories" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceCategories"></a>

```go
func ResourceCategories() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig <a name="LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsresourcecategoriesmanagement"

&loganalyticsloganalyticsresourcecategoriesmanagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Namespace: *string,
	ResourceCategories: *[]*string,
	ResourceId: *string,
	ResourceType: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#namespace LogAnalyticsLogAnalyticsResourceCategoriesManagement#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.resourceCategories">ResourceCategories</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#resource_categories LogAnalyticsLogAnalyticsResourceCategoriesManagement#resource_categories}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#resource_id LogAnalyticsLogAnalyticsResourceCategoriesManagement#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#resource_type LogAnalyticsLogAnalyticsResourceCategoriesManagement#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#id LogAnalyticsLogAnalyticsResourceCategoriesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts">LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#namespace LogAnalyticsLogAnalyticsResourceCategoriesManagement#namespace}.

---

##### `ResourceCategories`<sup>Required</sup> <a name="ResourceCategories" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.resourceCategories"></a>

```go
ResourceCategories *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#resource_categories LogAnalyticsLogAnalyticsResourceCategoriesManagement#resource_categories}.

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#resource_id LogAnalyticsLogAnalyticsResourceCategoriesManagement#resource_id}.

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#resource_type LogAnalyticsLogAnalyticsResourceCategoriesManagement#resource_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#id LogAnalyticsLogAnalyticsResourceCategoriesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.timeouts"></a>

```go
Timeouts LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts">LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#timeouts LogAnalyticsLogAnalyticsResourceCategoriesManagement#timeouts}

---

### LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts <a name="LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsresourcecategoriesmanagement"

&loganalyticsloganalyticsresourcecategoriesmanagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#create LogAnalyticsLogAnalyticsResourceCategoriesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#delete LogAnalyticsLogAnalyticsResourceCategoriesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#update LogAnalyticsLogAnalyticsResourceCategoriesManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#create LogAnalyticsLogAnalyticsResourceCategoriesManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#delete LogAnalyticsLogAnalyticsResourceCategoriesManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#update LogAnalyticsLogAnalyticsResourceCategoriesManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference <a name="LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsresourcecategoriesmanagement"

loganalyticsloganalyticsresourcecategoriesmanagement.NewLogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



