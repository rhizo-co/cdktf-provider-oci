# `dataSafeLibraryMaskingFormat` Submodule <a name="`dataSafeLibraryMaskingFormat` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeLibraryMaskingFormat <a name="DataSafeLibraryMaskingFormat" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format oci_data_safe_library_masking_format}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafelibrarymaskingformat"

datasafelibrarymaskingformat.NewDataSafeLibraryMaskingFormat(scope Construct, id *string, config DataSafeLibraryMaskingFormatConfig) DataSafeLibraryMaskingFormat
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig">DataSafeLibraryMaskingFormatConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig">DataSafeLibraryMaskingFormatConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putFormatEntries">PutFormatEntries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetSensitiveTypeIds">ResetSensitiveTypeIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFormatEntries` <a name="PutFormatEntries" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putFormatEntries"></a>

```go
func PutFormatEntries(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putFormatEntries.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putTimeouts"></a>

```go
func PutTimeouts(value DataSafeLibraryMaskingFormatTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetId"></a>

```go
func ResetId()
```

##### `ResetSensitiveTypeIds` <a name="ResetSensitiveTypeIds" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetSensitiveTypeIds"></a>

```go
func ResetSensitiveTypeIds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeLibraryMaskingFormat resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafelibrarymaskingformat"

datasafelibrarymaskingformat.DataSafeLibraryMaskingFormat_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafelibrarymaskingformat"

datasafelibrarymaskingformat.DataSafeLibraryMaskingFormat_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafelibrarymaskingformat"

datasafelibrarymaskingformat.DataSafeLibraryMaskingFormat_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafelibrarymaskingformat"

datasafelibrarymaskingformat.DataSafeLibraryMaskingFormat_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataSafeLibraryMaskingFormat resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSafeLibraryMaskingFormat to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSafeLibraryMaskingFormat that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeLibraryMaskingFormat to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.formatEntries">FormatEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList">DataSafeLibraryMaskingFormatFormatEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference">DataSafeLibraryMaskingFormatTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.formatEntriesInput">FormatEntriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.sensitiveTypeIdsInput">SensitiveTypeIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.sensitiveTypeIds">SensitiveTypeIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FormatEntries`<sup>Required</sup> <a name="FormatEntries" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.formatEntries"></a>

```go
func FormatEntries() DataSafeLibraryMaskingFormatFormatEntriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList">DataSafeLibraryMaskingFormatFormatEntriesList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeouts"></a>

```go
func Timeouts() DataSafeLibraryMaskingFormatTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference">DataSafeLibraryMaskingFormatTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FormatEntriesInput`<sup>Optional</sup> <a name="FormatEntriesInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.formatEntriesInput"></a>

```go
func FormatEntriesInput() interface{}
```

- *Type:* interface{}

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SensitiveTypeIdsInput`<sup>Optional</sup> <a name="SensitiveTypeIdsInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.sensitiveTypeIdsInput"></a>

```go
func SensitiveTypeIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SensitiveTypeIds`<sup>Required</sup> <a name="SensitiveTypeIds" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.sensitiveTypeIds"></a>

```go
func SensitiveTypeIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeLibraryMaskingFormatConfig <a name="DataSafeLibraryMaskingFormatConfig" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafelibrarymaskingformat"

&datasafelibrarymaskingformat.DataSafeLibraryMaskingFormatConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	FormatEntries: interface{},
	DefinedTags: *map[string]*string,
	Description: *string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	SensitiveTypeIds: *[]*string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#compartment_id DataSafeLibraryMaskingFormat#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.formatEntries">FormatEntries</a></code> | <code>interface{}</code> | format_entries block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#defined_tags DataSafeLibraryMaskingFormat#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#display_name DataSafeLibraryMaskingFormat#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#freeform_tags DataSafeLibraryMaskingFormat#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#id DataSafeLibraryMaskingFormat#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.sensitiveTypeIds">SensitiveTypeIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sensitive_type_ids DataSafeLibraryMaskingFormat#sensitive_type_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#compartment_id DataSafeLibraryMaskingFormat#compartment_id}.

---

##### `FormatEntries`<sup>Required</sup> <a name="FormatEntries" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.formatEntries"></a>

```go
FormatEntries interface{}
```

- *Type:* interface{}

format_entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#format_entries DataSafeLibraryMaskingFormat#format_entries}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#defined_tags DataSafeLibraryMaskingFormat#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#display_name DataSafeLibraryMaskingFormat#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#freeform_tags DataSafeLibraryMaskingFormat#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#id DataSafeLibraryMaskingFormat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SensitiveTypeIds`<sup>Optional</sup> <a name="SensitiveTypeIds" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.sensitiveTypeIds"></a>

```go
SensitiveTypeIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sensitive_type_ids DataSafeLibraryMaskingFormat#sensitive_type_ids}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.timeouts"></a>

```go
Timeouts DataSafeLibraryMaskingFormatTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#timeouts DataSafeLibraryMaskingFormat#timeouts}

---

### DataSafeLibraryMaskingFormatFormatEntries <a name="DataSafeLibraryMaskingFormatFormatEntries" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafelibrarymaskingformat"

&datasafelibrarymaskingformat.DataSafeLibraryMaskingFormatFormatEntries {
	Type: *string,
	ColumnName: *string,
	Description: *string,
	EndDate: *string,
	EndLength: *f64,
	EndValue: *f64,
	FixedNumber: *f64,
	FixedString: *string,
	GroupingColumns: *[]*string,
	Length: *f64,
	LibraryMaskingFormatId: *string,
	Pattern: *string,
	PostProcessingFunction: *string,
	RandomList: *[]*string,
	RegularExpression: *string,
	ReplaceWith: *string,
	SchemaName: *string,
	SqlExpression: *string,
	StartDate: *string,
	StartLength: *f64,
	StartPosition: *f64,
	StartValue: *f64,
	TableName: *string,
	UserDefinedFunction: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#type DataSafeLibraryMaskingFormat#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.columnName">ColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#column_name DataSafeLibraryMaskingFormat#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endDate">EndDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_date DataSafeLibraryMaskingFormat#end_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endLength">EndLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_length DataSafeLibraryMaskingFormat#end_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endValue">EndValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_value DataSafeLibraryMaskingFormat#end_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.fixedNumber">FixedNumber</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#fixed_number DataSafeLibraryMaskingFormat#fixed_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.fixedString">FixedString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#fixed_string DataSafeLibraryMaskingFormat#fixed_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.groupingColumns">GroupingColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#grouping_columns DataSafeLibraryMaskingFormat#grouping_columns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.length">Length</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#length DataSafeLibraryMaskingFormat#length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.libraryMaskingFormatId">LibraryMaskingFormatId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#library_masking_format_id DataSafeLibraryMaskingFormat#library_masking_format_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.pattern">Pattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#pattern DataSafeLibraryMaskingFormat#pattern}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.postProcessingFunction">PostProcessingFunction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#post_processing_function DataSafeLibraryMaskingFormat#post_processing_function}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.randomList">RandomList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#random_list DataSafeLibraryMaskingFormat#random_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.regularExpression">RegularExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#regular_expression DataSafeLibraryMaskingFormat#regular_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.replaceWith">ReplaceWith</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#replace_with DataSafeLibraryMaskingFormat#replace_with}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#schema_name DataSafeLibraryMaskingFormat#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sql_expression DataSafeLibraryMaskingFormat#sql_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startDate">StartDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_date DataSafeLibraryMaskingFormat#start_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startLength">StartLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_length DataSafeLibraryMaskingFormat#start_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startPosition">StartPosition</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_position DataSafeLibraryMaskingFormat#start_position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startValue">StartValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_value DataSafeLibraryMaskingFormat#start_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#table_name DataSafeLibraryMaskingFormat#table_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.userDefinedFunction">UserDefinedFunction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#user_defined_function DataSafeLibraryMaskingFormat#user_defined_function}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#type DataSafeLibraryMaskingFormat#type}.

---

##### `ColumnName`<sup>Optional</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.columnName"></a>

```go
ColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#column_name DataSafeLibraryMaskingFormat#column_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}.

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endDate"></a>

```go
EndDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_date DataSafeLibraryMaskingFormat#end_date}.

---

##### `EndLength`<sup>Optional</sup> <a name="EndLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endLength"></a>

```go
EndLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_length DataSafeLibraryMaskingFormat#end_length}.

---

##### `EndValue`<sup>Optional</sup> <a name="EndValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endValue"></a>

```go
EndValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_value DataSafeLibraryMaskingFormat#end_value}.

---

##### `FixedNumber`<sup>Optional</sup> <a name="FixedNumber" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.fixedNumber"></a>

```go
FixedNumber *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#fixed_number DataSafeLibraryMaskingFormat#fixed_number}.

---

##### `FixedString`<sup>Optional</sup> <a name="FixedString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.fixedString"></a>

```go
FixedString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#fixed_string DataSafeLibraryMaskingFormat#fixed_string}.

---

##### `GroupingColumns`<sup>Optional</sup> <a name="GroupingColumns" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.groupingColumns"></a>

```go
GroupingColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#grouping_columns DataSafeLibraryMaskingFormat#grouping_columns}.

---

##### `Length`<sup>Optional</sup> <a name="Length" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.length"></a>

```go
Length *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#length DataSafeLibraryMaskingFormat#length}.

---

##### `LibraryMaskingFormatId`<sup>Optional</sup> <a name="LibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.libraryMaskingFormatId"></a>

```go
LibraryMaskingFormatId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#library_masking_format_id DataSafeLibraryMaskingFormat#library_masking_format_id}.

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#pattern DataSafeLibraryMaskingFormat#pattern}.

---

##### `PostProcessingFunction`<sup>Optional</sup> <a name="PostProcessingFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.postProcessingFunction"></a>

```go
PostProcessingFunction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#post_processing_function DataSafeLibraryMaskingFormat#post_processing_function}.

---

##### `RandomList`<sup>Optional</sup> <a name="RandomList" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.randomList"></a>

```go
RandomList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#random_list DataSafeLibraryMaskingFormat#random_list}.

---

##### `RegularExpression`<sup>Optional</sup> <a name="RegularExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.regularExpression"></a>

```go
RegularExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#regular_expression DataSafeLibraryMaskingFormat#regular_expression}.

---

##### `ReplaceWith`<sup>Optional</sup> <a name="ReplaceWith" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.replaceWith"></a>

```go
ReplaceWith *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#replace_with DataSafeLibraryMaskingFormat#replace_with}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#schema_name DataSafeLibraryMaskingFormat#schema_name}.

---

##### `SqlExpression`<sup>Optional</sup> <a name="SqlExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.sqlExpression"></a>

```go
SqlExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sql_expression DataSafeLibraryMaskingFormat#sql_expression}.

---

##### `StartDate`<sup>Optional</sup> <a name="StartDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startDate"></a>

```go
StartDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_date DataSafeLibraryMaskingFormat#start_date}.

---

##### `StartLength`<sup>Optional</sup> <a name="StartLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startLength"></a>

```go
StartLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_length DataSafeLibraryMaskingFormat#start_length}.

---

##### `StartPosition`<sup>Optional</sup> <a name="StartPosition" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startPosition"></a>

```go
StartPosition *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_position DataSafeLibraryMaskingFormat#start_position}.

---

##### `StartValue`<sup>Optional</sup> <a name="StartValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startValue"></a>

```go
StartValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_value DataSafeLibraryMaskingFormat#start_value}.

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#table_name DataSafeLibraryMaskingFormat#table_name}.

---

##### `UserDefinedFunction`<sup>Optional</sup> <a name="UserDefinedFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.userDefinedFunction"></a>

```go
UserDefinedFunction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#user_defined_function DataSafeLibraryMaskingFormat#user_defined_function}.

---

### DataSafeLibraryMaskingFormatTimeouts <a name="DataSafeLibraryMaskingFormatTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafelibrarymaskingformat"

&datasafelibrarymaskingformat.DataSafeLibraryMaskingFormatTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#create DataSafeLibraryMaskingFormat#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#delete DataSafeLibraryMaskingFormat#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#update DataSafeLibraryMaskingFormat#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#create DataSafeLibraryMaskingFormat#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#delete DataSafeLibraryMaskingFormat#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#update DataSafeLibraryMaskingFormat#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeLibraryMaskingFormatFormatEntriesList <a name="DataSafeLibraryMaskingFormatFormatEntriesList" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafelibrarymaskingformat"

datasafelibrarymaskingformat.NewDataSafeLibraryMaskingFormatFormatEntriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSafeLibraryMaskingFormatFormatEntriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.get"></a>

```go
func Get(index *f64) DataSafeLibraryMaskingFormatFormatEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataSafeLibraryMaskingFormatFormatEntriesOutputReference <a name="DataSafeLibraryMaskingFormatFormatEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafelibrarymaskingformat"

datasafelibrarymaskingformat.NewDataSafeLibraryMaskingFormatFormatEntriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSafeLibraryMaskingFormatFormatEntriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetColumnName">ResetColumnName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndLength">ResetEndLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndValue">ResetEndValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetFixedNumber">ResetFixedNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetFixedString">ResetFixedString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetGroupingColumns">ResetGroupingColumns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetLength">ResetLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetLibraryMaskingFormatId">ResetLibraryMaskingFormatId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetPostProcessingFunction">ResetPostProcessingFunction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetRandomList">ResetRandomList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetRegularExpression">ResetRegularExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetReplaceWith">ResetReplaceWith</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetSqlExpression">ResetSqlExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartDate">ResetStartDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartLength">ResetStartLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartPosition">ResetStartPosition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartValue">ResetStartValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetUserDefinedFunction">ResetUserDefinedFunction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnName` <a name="ResetColumnName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetColumnName"></a>

```go
func ResetColumnName()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEndDate` <a name="ResetEndDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndDate"></a>

```go
func ResetEndDate()
```

##### `ResetEndLength` <a name="ResetEndLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndLength"></a>

```go
func ResetEndLength()
```

##### `ResetEndValue` <a name="ResetEndValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndValue"></a>

```go
func ResetEndValue()
```

##### `ResetFixedNumber` <a name="ResetFixedNumber" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetFixedNumber"></a>

```go
func ResetFixedNumber()
```

##### `ResetFixedString` <a name="ResetFixedString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetFixedString"></a>

```go
func ResetFixedString()
```

##### `ResetGroupingColumns` <a name="ResetGroupingColumns" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetGroupingColumns"></a>

```go
func ResetGroupingColumns()
```

##### `ResetLength` <a name="ResetLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetLength"></a>

```go
func ResetLength()
```

##### `ResetLibraryMaskingFormatId` <a name="ResetLibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetLibraryMaskingFormatId"></a>

```go
func ResetLibraryMaskingFormatId()
```

##### `ResetPattern` <a name="ResetPattern" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetPattern"></a>

```go
func ResetPattern()
```

##### `ResetPostProcessingFunction` <a name="ResetPostProcessingFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetPostProcessingFunction"></a>

```go
func ResetPostProcessingFunction()
```

##### `ResetRandomList` <a name="ResetRandomList" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetRandomList"></a>

```go
func ResetRandomList()
```

##### `ResetRegularExpression` <a name="ResetRegularExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetRegularExpression"></a>

```go
func ResetRegularExpression()
```

##### `ResetReplaceWith` <a name="ResetReplaceWith" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetReplaceWith"></a>

```go
func ResetReplaceWith()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetSchemaName"></a>

```go
func ResetSchemaName()
```

##### `ResetSqlExpression` <a name="ResetSqlExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetSqlExpression"></a>

```go
func ResetSqlExpression()
```

##### `ResetStartDate` <a name="ResetStartDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartDate"></a>

```go
func ResetStartDate()
```

##### `ResetStartLength` <a name="ResetStartLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartLength"></a>

```go
func ResetStartLength()
```

##### `ResetStartPosition` <a name="ResetStartPosition" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartPosition"></a>

```go
func ResetStartPosition()
```

##### `ResetStartValue` <a name="ResetStartValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartValue"></a>

```go
func ResetStartValue()
```

##### `ResetTableName` <a name="ResetTableName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetTableName"></a>

```go
func ResetTableName()
```

##### `ResetUserDefinedFunction` <a name="ResetUserDefinedFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetUserDefinedFunction"></a>

```go
func ResetUserDefinedFunction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDateInput">EndDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLengthInput">EndLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValueInput">EndValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumberInput">FixedNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedStringInput">FixedStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumnsInput">GroupingColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.lengthInput">LengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatIdInput">LibraryMaskingFormatIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunctionInput">PostProcessingFunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomListInput">RandomListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpressionInput">RegularExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWithInput">ReplaceWithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpressionInput">SqlExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDateInput">StartDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLengthInput">StartLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPositionInput">StartPositionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValueInput">StartValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunctionInput">UserDefinedFunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDate">EndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLength">EndLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValue">EndValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumber">FixedNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedString">FixedString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumns">GroupingColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.length">Length</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatId">LibraryMaskingFormatId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunction">PostProcessingFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomList">RandomList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpression">RegularExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWith">ReplaceWith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDate">StartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLength">StartLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPosition">StartPosition</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValue">StartValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunction">UserDefinedFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnNameInput"></a>

```go
func ColumnNameInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDateInput"></a>

```go
func EndDateInput() *string
```

- *Type:* *string

---

##### `EndLengthInput`<sup>Optional</sup> <a name="EndLengthInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLengthInput"></a>

```go
func EndLengthInput() *f64
```

- *Type:* *f64

---

##### `EndValueInput`<sup>Optional</sup> <a name="EndValueInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValueInput"></a>

```go
func EndValueInput() *f64
```

- *Type:* *f64

---

##### `FixedNumberInput`<sup>Optional</sup> <a name="FixedNumberInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumberInput"></a>

```go
func FixedNumberInput() *f64
```

- *Type:* *f64

---

##### `FixedStringInput`<sup>Optional</sup> <a name="FixedStringInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedStringInput"></a>

```go
func FixedStringInput() *string
```

- *Type:* *string

---

##### `GroupingColumnsInput`<sup>Optional</sup> <a name="GroupingColumnsInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumnsInput"></a>

```go
func GroupingColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LengthInput`<sup>Optional</sup> <a name="LengthInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.lengthInput"></a>

```go
func LengthInput() *f64
```

- *Type:* *f64

---

##### `LibraryMaskingFormatIdInput`<sup>Optional</sup> <a name="LibraryMaskingFormatIdInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatIdInput"></a>

```go
func LibraryMaskingFormatIdInput() *string
```

- *Type:* *string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `PostProcessingFunctionInput`<sup>Optional</sup> <a name="PostProcessingFunctionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunctionInput"></a>

```go
func PostProcessingFunctionInput() *string
```

- *Type:* *string

---

##### `RandomListInput`<sup>Optional</sup> <a name="RandomListInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomListInput"></a>

```go
func RandomListInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegularExpressionInput`<sup>Optional</sup> <a name="RegularExpressionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpressionInput"></a>

```go
func RegularExpressionInput() *string
```

- *Type:* *string

---

##### `ReplaceWithInput`<sup>Optional</sup> <a name="ReplaceWithInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWithInput"></a>

```go
func ReplaceWithInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `SqlExpressionInput`<sup>Optional</sup> <a name="SqlExpressionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpressionInput"></a>

```go
func SqlExpressionInput() *string
```

- *Type:* *string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDateInput"></a>

```go
func StartDateInput() *string
```

- *Type:* *string

---

##### `StartLengthInput`<sup>Optional</sup> <a name="StartLengthInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLengthInput"></a>

```go
func StartLengthInput() *f64
```

- *Type:* *f64

---

##### `StartPositionInput`<sup>Optional</sup> <a name="StartPositionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPositionInput"></a>

```go
func StartPositionInput() *f64
```

- *Type:* *f64

---

##### `StartValueInput`<sup>Optional</sup> <a name="StartValueInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValueInput"></a>

```go
func StartValueInput() *f64
```

- *Type:* *f64

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UserDefinedFunctionInput`<sup>Optional</sup> <a name="UserDefinedFunctionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunctionInput"></a>

```go
func UserDefinedFunctionInput() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDate"></a>

```go
func EndDate() *string
```

- *Type:* *string

---

##### `EndLength`<sup>Required</sup> <a name="EndLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLength"></a>

```go
func EndLength() *f64
```

- *Type:* *f64

---

##### `EndValue`<sup>Required</sup> <a name="EndValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValue"></a>

```go
func EndValue() *f64
```

- *Type:* *f64

---

##### `FixedNumber`<sup>Required</sup> <a name="FixedNumber" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumber"></a>

```go
func FixedNumber() *f64
```

- *Type:* *f64

---

##### `FixedString`<sup>Required</sup> <a name="FixedString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedString"></a>

```go
func FixedString() *string
```

- *Type:* *string

---

##### `GroupingColumns`<sup>Required</sup> <a name="GroupingColumns" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumns"></a>

```go
func GroupingColumns() *[]*string
```

- *Type:* *[]*string

---

##### `Length`<sup>Required</sup> <a name="Length" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.length"></a>

```go
func Length() *f64
```

- *Type:* *f64

---

##### `LibraryMaskingFormatId`<sup>Required</sup> <a name="LibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatId"></a>

```go
func LibraryMaskingFormatId() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `PostProcessingFunction`<sup>Required</sup> <a name="PostProcessingFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunction"></a>

```go
func PostProcessingFunction() *string
```

- *Type:* *string

---

##### `RandomList`<sup>Required</sup> <a name="RandomList" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomList"></a>

```go
func RandomList() *[]*string
```

- *Type:* *[]*string

---

##### `RegularExpression`<sup>Required</sup> <a name="RegularExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpression"></a>

```go
func RegularExpression() *string
```

- *Type:* *string

---

##### `ReplaceWith`<sup>Required</sup> <a name="ReplaceWith" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWith"></a>

```go
func ReplaceWith() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpression"></a>

```go
func SqlExpression() *string
```

- *Type:* *string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDate"></a>

```go
func StartDate() *string
```

- *Type:* *string

---

##### `StartLength`<sup>Required</sup> <a name="StartLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLength"></a>

```go
func StartLength() *f64
```

- *Type:* *f64

---

##### `StartPosition`<sup>Required</sup> <a name="StartPosition" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPosition"></a>

```go
func StartPosition() *f64
```

- *Type:* *f64

---

##### `StartValue`<sup>Required</sup> <a name="StartValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValue"></a>

```go
func StartValue() *f64
```

- *Type:* *f64

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserDefinedFunction`<sup>Required</sup> <a name="UserDefinedFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunction"></a>

```go
func UserDefinedFunction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataSafeLibraryMaskingFormatTimeoutsOutputReference <a name="DataSafeLibraryMaskingFormatTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafelibrarymaskingformat"

datasafelibrarymaskingformat.NewDataSafeLibraryMaskingFormatTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSafeLibraryMaskingFormatTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



