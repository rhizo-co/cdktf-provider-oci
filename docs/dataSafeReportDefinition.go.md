# `dataSafeReportDefinition` Submodule <a name="`dataSafeReportDefinition` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeReportDefinition <a name="DataSafeReportDefinition" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition oci_data_safe_report_definition}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafereportdefinition"

datasafereportdefinition.NewDataSafeReportDefinition(scope Construct, id *string, config DataSafeReportDefinitionConfig) DataSafeReportDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig">DataSafeReportDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig">DataSafeReportDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnFilters">PutColumnFilters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnInfo">PutColumnInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnSortings">PutColumnSortings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putSummary">PutSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutColumnFilters` <a name="PutColumnFilters" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnFilters"></a>

```go
func PutColumnFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutColumnInfo` <a name="PutColumnInfo" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnInfo"></a>

```go
func PutColumnInfo(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnInfo.parameter.value"></a>

- *Type:* interface{}

---

##### `PutColumnSortings` <a name="PutColumnSortings" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnSortings"></a>

```go
func PutColumnSortings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnSortings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSummary` <a name="PutSummary" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putSummary"></a>

```go
func PutSummary(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putSummary.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putTimeouts"></a>

```go
func PutTimeouts(value DataSafeReportDefinitionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeReportDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafereportdefinition"

datasafereportdefinition.DataSafeReportDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafereportdefinition"

datasafereportdefinition.DataSafeReportDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafereportdefinition"

datasafereportdefinition.DataSafeReportDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafereportdefinition"

datasafereportdefinition.DataSafeReportDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataSafeReportDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSafeReportDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSafeReportDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeReportDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnFilters">ColumnFilters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList">DataSafeReportDefinitionColumnFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnInfo">ColumnInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList">DataSafeReportDefinitionColumnInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnSortings">ColumnSortings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList">DataSafeReportDefinitionColumnSortingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.complianceStandards">ComplianceStandards</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.dataSource">DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayOrder">DisplayOrder</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.isSeeded">IsSeeded</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.recordTimeSpan">RecordTimeSpan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportCompartmentId">ScheduledReportCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportMimeType">ScheduledReportMimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportName">ScheduledReportName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportRowLimit">ScheduledReportRowLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scimFilter">ScimFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.summary">Summary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList">DataSafeReportDefinitionSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference">DataSafeReportDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnFiltersInput">ColumnFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnInfoInput">ColumnInfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnSortingsInput">ColumnSortingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.parentIdInput">ParentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.summaryInput">SummaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.parentId">ParentId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Category`<sup>Required</sup> <a name="Category" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `ColumnFilters`<sup>Required</sup> <a name="ColumnFilters" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnFilters"></a>

```go
func ColumnFilters() DataSafeReportDefinitionColumnFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList">DataSafeReportDefinitionColumnFiltersList</a>

---

##### `ColumnInfo`<sup>Required</sup> <a name="ColumnInfo" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnInfo"></a>

```go
func ColumnInfo() DataSafeReportDefinitionColumnInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList">DataSafeReportDefinitionColumnInfoList</a>

---

##### `ColumnSortings`<sup>Required</sup> <a name="ColumnSortings" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnSortings"></a>

```go
func ColumnSortings() DataSafeReportDefinitionColumnSortingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList">DataSafeReportDefinitionColumnSortingsList</a>

---

##### `ComplianceStandards`<sup>Required</sup> <a name="ComplianceStandards" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.complianceStandards"></a>

```go
func ComplianceStandards() *[]*string
```

- *Type:* *[]*string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.dataSource"></a>

```go
func DataSource() *string
```

- *Type:* *string

---

##### `DisplayOrder`<sup>Required</sup> <a name="DisplayOrder" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayOrder"></a>

```go
func DisplayOrder() *f64
```

- *Type:* *f64

---

##### `IsSeeded`<sup>Required</sup> <a name="IsSeeded" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.isSeeded"></a>

```go
func IsSeeded() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `RecordTimeSpan`<sup>Required</sup> <a name="RecordTimeSpan" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.recordTimeSpan"></a>

```go
func RecordTimeSpan() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `ScheduledReportCompartmentId`<sup>Required</sup> <a name="ScheduledReportCompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportCompartmentId"></a>

```go
func ScheduledReportCompartmentId() *string
```

- *Type:* *string

---

##### `ScheduledReportMimeType`<sup>Required</sup> <a name="ScheduledReportMimeType" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportMimeType"></a>

```go
func ScheduledReportMimeType() *string
```

- *Type:* *string

---

##### `ScheduledReportName`<sup>Required</sup> <a name="ScheduledReportName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportName"></a>

```go
func ScheduledReportName() *string
```

- *Type:* *string

---

##### `ScheduledReportRowLimit`<sup>Required</sup> <a name="ScheduledReportRowLimit" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportRowLimit"></a>

```go
func ScheduledReportRowLimit() *f64
```

- *Type:* *f64

---

##### `ScimFilter`<sup>Required</sup> <a name="ScimFilter" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scimFilter"></a>

```go
func ScimFilter() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.summary"></a>

```go
func Summary() DataSafeReportDefinitionSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList">DataSafeReportDefinitionSummaryList</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeouts"></a>

```go
func Timeouts() DataSafeReportDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference">DataSafeReportDefinitionTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `ColumnFiltersInput`<sup>Optional</sup> <a name="ColumnFiltersInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnFiltersInput"></a>

```go
func ColumnFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `ColumnInfoInput`<sup>Optional</sup> <a name="ColumnInfoInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnInfoInput"></a>

```go
func ColumnInfoInput() interface{}
```

- *Type:* interface{}

---

##### `ColumnSortingsInput`<sup>Optional</sup> <a name="ColumnSortingsInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnSortingsInput"></a>

```go
func ColumnSortingsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParentIdInput`<sup>Optional</sup> <a name="ParentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.parentIdInput"></a>

```go
func ParentIdInput() *string
```

- *Type:* *string

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.summaryInput"></a>

```go
func SummaryInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.parentId"></a>

```go
func ParentId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeReportDefinitionColumnFilters <a name="DataSafeReportDefinitionColumnFilters" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafereportdefinition"

&datasafereportdefinition.DataSafeReportDefinitionColumnFilters {
	Expressions: *[]*string,
	FieldName: *string,
	IsEnabled: interface{},
	IsHidden: interface{},
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.expressions">Expressions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#expressions DataSafeReportDefinition#expressions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.fieldName">FieldName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_enabled DataSafeReportDefinition#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.isHidden">IsHidden</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#operator DataSafeReportDefinition#operator}. |

---

##### `Expressions`<sup>Required</sup> <a name="Expressions" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.expressions"></a>

```go
Expressions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#expressions DataSafeReportDefinition#expressions}.

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.fieldName"></a>

```go
FieldName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}.

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_enabled DataSafeReportDefinition#is_enabled}.

---

##### `IsHidden`<sup>Required</sup> <a name="IsHidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.isHidden"></a>

```go
IsHidden interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#operator DataSafeReportDefinition#operator}.

---

### DataSafeReportDefinitionColumnInfo <a name="DataSafeReportDefinitionColumnInfo" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafereportdefinition"

&datasafereportdefinition.DataSafeReportDefinitionColumnInfo {
	DisplayName: *string,
	DisplayOrder: *f64,
	FieldName: *string,
	IsHidden: interface{},
	DataType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_name DataSafeReportDefinition#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.displayOrder">DisplayOrder</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_order DataSafeReportDefinition#display_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.fieldName">FieldName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.isHidden">IsHidden</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.dataType">DataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#data_type DataSafeReportDefinition#data_type}. |

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_name DataSafeReportDefinition#display_name}.

---

##### `DisplayOrder`<sup>Required</sup> <a name="DisplayOrder" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.displayOrder"></a>

```go
DisplayOrder *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_order DataSafeReportDefinition#display_order}.

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.fieldName"></a>

```go
FieldName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}.

---

##### `IsHidden`<sup>Required</sup> <a name="IsHidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.isHidden"></a>

```go
IsHidden interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}.

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#data_type DataSafeReportDefinition#data_type}.

---

### DataSafeReportDefinitionColumnSortings <a name="DataSafeReportDefinitionColumnSortings" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafereportdefinition"

&datasafereportdefinition.DataSafeReportDefinitionColumnSortings {
	FieldName: *string,
	IsAscending: interface{},
	SortingOrder: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.fieldName">FieldName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.isAscending">IsAscending</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_ascending DataSafeReportDefinition#is_ascending}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.sortingOrder">SortingOrder</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#sorting_order DataSafeReportDefinition#sorting_order}. |

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.fieldName"></a>

```go
FieldName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}.

---

##### `IsAscending`<sup>Required</sup> <a name="IsAscending" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.isAscending"></a>

```go
IsAscending interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_ascending DataSafeReportDefinition#is_ascending}.

---

##### `SortingOrder`<sup>Required</sup> <a name="SortingOrder" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.sortingOrder"></a>

```go
SortingOrder *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#sorting_order DataSafeReportDefinition#sorting_order}.

---

### DataSafeReportDefinitionConfig <a name="DataSafeReportDefinitionConfig" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafereportdefinition"

&datasafereportdefinition.DataSafeReportDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ColumnFilters: interface{},
	ColumnInfo: interface{},
	ColumnSortings: interface{},
	CompartmentId: *string,
	DisplayName: *string,
	ParentId: *string,
	Summary: interface{},
	DefinedTags: *map[string]*string,
	Description: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnFilters">ColumnFilters</a></code> | <code>interface{}</code> | column_filters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnInfo">ColumnInfo</a></code> | <code>interface{}</code> | column_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnSortings">ColumnSortings</a></code> | <code>interface{}</code> | column_sortings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#compartment_id DataSafeReportDefinition#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_name DataSafeReportDefinition#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.parentId">ParentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#parent_id DataSafeReportDefinition#parent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.summary">Summary</a></code> | <code>interface{}</code> | summary block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#defined_tags DataSafeReportDefinition#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#description DataSafeReportDefinition#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#freeform_tags DataSafeReportDefinition#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#id DataSafeReportDefinition#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ColumnFilters`<sup>Required</sup> <a name="ColumnFilters" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnFilters"></a>

```go
ColumnFilters interface{}
```

- *Type:* interface{}

column_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#column_filters DataSafeReportDefinition#column_filters}

---

##### `ColumnInfo`<sup>Required</sup> <a name="ColumnInfo" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnInfo"></a>

```go
ColumnInfo interface{}
```

- *Type:* interface{}

column_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#column_info DataSafeReportDefinition#column_info}

---

##### `ColumnSortings`<sup>Required</sup> <a name="ColumnSortings" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnSortings"></a>

```go
ColumnSortings interface{}
```

- *Type:* interface{}

column_sortings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#column_sortings DataSafeReportDefinition#column_sortings}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#compartment_id DataSafeReportDefinition#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_name DataSafeReportDefinition#display_name}.

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.parentId"></a>

```go
ParentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#parent_id DataSafeReportDefinition#parent_id}.

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.summary"></a>

```go
Summary interface{}
```

- *Type:* interface{}

summary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#summary DataSafeReportDefinition#summary}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#defined_tags DataSafeReportDefinition#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#description DataSafeReportDefinition#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#freeform_tags DataSafeReportDefinition#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#id DataSafeReportDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.timeouts"></a>

```go
Timeouts DataSafeReportDefinitionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#timeouts DataSafeReportDefinition#timeouts}

---

### DataSafeReportDefinitionSummary <a name="DataSafeReportDefinitionSummary" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafereportdefinition"

&datasafereportdefinition.DataSafeReportDefinitionSummary {
	DisplayOrder: *f64,
	Name: *string,
	CountOf: *string,
	GroupByFieldName: *string,
	IsHidden: interface{},
	ScimFilter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.displayOrder">DisplayOrder</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_order DataSafeReportDefinition#display_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#name DataSafeReportDefinition#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.countOf">CountOf</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#count_of DataSafeReportDefinition#count_of}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.groupByFieldName">GroupByFieldName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#group_by_field_name DataSafeReportDefinition#group_by_field_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.isHidden">IsHidden</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.scimFilter">ScimFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#scim_filter DataSafeReportDefinition#scim_filter}. |

---

##### `DisplayOrder`<sup>Required</sup> <a name="DisplayOrder" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.displayOrder"></a>

```go
DisplayOrder *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_order DataSafeReportDefinition#display_order}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#name DataSafeReportDefinition#name}.

---

##### `CountOf`<sup>Optional</sup> <a name="CountOf" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.countOf"></a>

```go
CountOf *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#count_of DataSafeReportDefinition#count_of}.

---

##### `GroupByFieldName`<sup>Optional</sup> <a name="GroupByFieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.groupByFieldName"></a>

```go
GroupByFieldName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#group_by_field_name DataSafeReportDefinition#group_by_field_name}.

---

##### `IsHidden`<sup>Optional</sup> <a name="IsHidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.isHidden"></a>

```go
IsHidden interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}.

---

##### `ScimFilter`<sup>Optional</sup> <a name="ScimFilter" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.scimFilter"></a>

```go
ScimFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#scim_filter DataSafeReportDefinition#scim_filter}.

---

### DataSafeReportDefinitionTimeouts <a name="DataSafeReportDefinitionTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafereportdefinition"

&datasafereportdefinition.DataSafeReportDefinitionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#create DataSafeReportDefinition#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#delete DataSafeReportDefinition#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#update DataSafeReportDefinition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#create DataSafeReportDefinition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#delete DataSafeReportDefinition#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#update DataSafeReportDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeReportDefinitionColumnFiltersList <a name="DataSafeReportDefinitionColumnFiltersList" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafereportdefinition"

datasafereportdefinition.NewDataSafeReportDefinitionColumnFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSafeReportDefinitionColumnFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.get"></a>

```go
func Get(index *f64) DataSafeReportDefinitionColumnFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataSafeReportDefinitionColumnFiltersOutputReference <a name="DataSafeReportDefinitionColumnFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafereportdefinition"

datasafereportdefinition.NewDataSafeReportDefinitionColumnFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSafeReportDefinitionColumnFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.expressionsInput">ExpressionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isHiddenInput">IsHiddenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.expressions">Expressions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fieldName">FieldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isHidden">IsHidden</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionsInput`<sup>Optional</sup> <a name="ExpressionsInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.expressionsInput"></a>

```go
func ExpressionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fieldNameInput"></a>

```go
func FieldNameInput() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsHiddenInput`<sup>Optional</sup> <a name="IsHiddenInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isHiddenInput"></a>

```go
func IsHiddenInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `Expressions`<sup>Required</sup> <a name="Expressions" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.expressions"></a>

```go
func Expressions() *[]*string
```

- *Type:* *[]*string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fieldName"></a>

```go
func FieldName() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsHidden`<sup>Required</sup> <a name="IsHidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isHidden"></a>

```go
func IsHidden() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataSafeReportDefinitionColumnInfoList <a name="DataSafeReportDefinitionColumnInfoList" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafereportdefinition"

datasafereportdefinition.NewDataSafeReportDefinitionColumnInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSafeReportDefinitionColumnInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.get"></a>

```go
func Get(index *f64) DataSafeReportDefinitionColumnInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataSafeReportDefinitionColumnInfoOutputReference <a name="DataSafeReportDefinitionColumnInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafereportdefinition"

datasafereportdefinition.NewDataSafeReportDefinitionColumnInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSafeReportDefinitionColumnInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataType` <a name="ResetDataType" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.resetDataType"></a>

```go
func ResetDataType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayOrderInput">DisplayOrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.isHiddenInput">IsHiddenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayOrder">DisplayOrder</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fieldName">FieldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.isHidden">IsHidden</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DisplayOrderInput`<sup>Optional</sup> <a name="DisplayOrderInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayOrderInput"></a>

```go
func DisplayOrderInput() *f64
```

- *Type:* *f64

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fieldNameInput"></a>

```go
func FieldNameInput() *string
```

- *Type:* *string

---

##### `IsHiddenInput`<sup>Optional</sup> <a name="IsHiddenInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.isHiddenInput"></a>

```go
func IsHiddenInput() interface{}
```

- *Type:* interface{}

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DisplayOrder`<sup>Required</sup> <a name="DisplayOrder" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayOrder"></a>

```go
func DisplayOrder() *f64
```

- *Type:* *f64

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fieldName"></a>

```go
func FieldName() *string
```

- *Type:* *string

---

##### `IsHidden`<sup>Required</sup> <a name="IsHidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.isHidden"></a>

```go
func IsHidden() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataSafeReportDefinitionColumnSortingsList <a name="DataSafeReportDefinitionColumnSortingsList" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafereportdefinition"

datasafereportdefinition.NewDataSafeReportDefinitionColumnSortingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSafeReportDefinitionColumnSortingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.get"></a>

```go
func Get(index *f64) DataSafeReportDefinitionColumnSortingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataSafeReportDefinitionColumnSortingsOutputReference <a name="DataSafeReportDefinitionColumnSortingsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafereportdefinition"

datasafereportdefinition.NewDataSafeReportDefinitionColumnSortingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSafeReportDefinitionColumnSortingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.isAscendingInput">IsAscendingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.sortingOrderInput">SortingOrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fieldName">FieldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.isAscending">IsAscending</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.sortingOrder">SortingOrder</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fieldNameInput"></a>

```go
func FieldNameInput() *string
```

- *Type:* *string

---

##### `IsAscendingInput`<sup>Optional</sup> <a name="IsAscendingInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.isAscendingInput"></a>

```go
func IsAscendingInput() interface{}
```

- *Type:* interface{}

---

##### `SortingOrderInput`<sup>Optional</sup> <a name="SortingOrderInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.sortingOrderInput"></a>

```go
func SortingOrderInput() *f64
```

- *Type:* *f64

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fieldName"></a>

```go
func FieldName() *string
```

- *Type:* *string

---

##### `IsAscending`<sup>Required</sup> <a name="IsAscending" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.isAscending"></a>

```go
func IsAscending() interface{}
```

- *Type:* interface{}

---

##### `SortingOrder`<sup>Required</sup> <a name="SortingOrder" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.sortingOrder"></a>

```go
func SortingOrder() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataSafeReportDefinitionSummaryList <a name="DataSafeReportDefinitionSummaryList" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafereportdefinition"

datasafereportdefinition.NewDataSafeReportDefinitionSummaryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSafeReportDefinitionSummaryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.get"></a>

```go
func Get(index *f64) DataSafeReportDefinitionSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataSafeReportDefinitionSummaryOutputReference <a name="DataSafeReportDefinitionSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafereportdefinition"

datasafereportdefinition.NewDataSafeReportDefinitionSummaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSafeReportDefinitionSummaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetCountOf">ResetCountOf</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetGroupByFieldName">ResetGroupByFieldName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetIsHidden">ResetIsHidden</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetScimFilter">ResetScimFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCountOf` <a name="ResetCountOf" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetCountOf"></a>

```go
func ResetCountOf()
```

##### `ResetGroupByFieldName` <a name="ResetGroupByFieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetGroupByFieldName"></a>

```go
func ResetGroupByFieldName()
```

##### `ResetIsHidden` <a name="ResetIsHidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetIsHidden"></a>

```go
func ResetIsHidden()
```

##### `ResetScimFilter` <a name="ResetScimFilter" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetScimFilter"></a>

```go
func ResetScimFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.countOfInput">CountOfInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.displayOrderInput">DisplayOrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.groupByFieldNameInput">GroupByFieldNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.isHiddenInput">IsHiddenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.scimFilterInput">ScimFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.countOf">CountOf</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.displayOrder">DisplayOrder</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.groupByFieldName">GroupByFieldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.isHidden">IsHidden</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.scimFilter">ScimFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountOfInput`<sup>Optional</sup> <a name="CountOfInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.countOfInput"></a>

```go
func CountOfInput() *string
```

- *Type:* *string

---

##### `DisplayOrderInput`<sup>Optional</sup> <a name="DisplayOrderInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.displayOrderInput"></a>

```go
func DisplayOrderInput() *f64
```

- *Type:* *f64

---

##### `GroupByFieldNameInput`<sup>Optional</sup> <a name="GroupByFieldNameInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.groupByFieldNameInput"></a>

```go
func GroupByFieldNameInput() *string
```

- *Type:* *string

---

##### `IsHiddenInput`<sup>Optional</sup> <a name="IsHiddenInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.isHiddenInput"></a>

```go
func IsHiddenInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScimFilterInput`<sup>Optional</sup> <a name="ScimFilterInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.scimFilterInput"></a>

```go
func ScimFilterInput() *string
```

- *Type:* *string

---

##### `CountOf`<sup>Required</sup> <a name="CountOf" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.countOf"></a>

```go
func CountOf() *string
```

- *Type:* *string

---

##### `DisplayOrder`<sup>Required</sup> <a name="DisplayOrder" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.displayOrder"></a>

```go
func DisplayOrder() *f64
```

- *Type:* *f64

---

##### `GroupByFieldName`<sup>Required</sup> <a name="GroupByFieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.groupByFieldName"></a>

```go
func GroupByFieldName() *string
```

- *Type:* *string

---

##### `IsHidden`<sup>Required</sup> <a name="IsHidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.isHidden"></a>

```go
func IsHidden() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScimFilter`<sup>Required</sup> <a name="ScimFilter" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.scimFilter"></a>

```go
func ScimFilter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataSafeReportDefinitionTimeoutsOutputReference <a name="DataSafeReportDefinitionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafereportdefinition"

datasafereportdefinition.NewDataSafeReportDefinitionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSafeReportDefinitionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



