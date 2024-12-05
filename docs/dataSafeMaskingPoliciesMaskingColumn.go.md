# `dataSafeMaskingPoliciesMaskingColumn` Submodule <a name="`dataSafeMaskingPoliciesMaskingColumn` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeMaskingPoliciesMaskingColumn <a name="DataSafeMaskingPoliciesMaskingColumn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column oci_data_safe_masking_policies_masking_column}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafemaskingpoliciesmaskingcolumn"

datasafemaskingpoliciesmaskingcolumn.NewDataSafeMaskingPoliciesMaskingColumn(scope Construct, id *string, config DataSafeMaskingPoliciesMaskingColumnConfig) DataSafeMaskingPoliciesMaskingColumn
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig">DataSafeMaskingPoliciesMaskingColumnConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig">DataSafeMaskingPoliciesMaskingColumnConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.putMaskingFormats">PutMaskingFormats</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetIsMaskingEnabled">ResetIsMaskingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetMaskingColumnGroup">ResetMaskingColumnGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetMaskingFormats">ResetMaskingFormats</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetObjectType">ResetObjectType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetSensitiveTypeId">ResetSensitiveTypeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMaskingFormats` <a name="PutMaskingFormats" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.putMaskingFormats"></a>

```go
func PutMaskingFormats(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.putMaskingFormats.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.putTimeouts"></a>

```go
func PutTimeouts(value DataSafeMaskingPoliciesMaskingColumnTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts">DataSafeMaskingPoliciesMaskingColumnTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetId"></a>

```go
func ResetId()
```

##### `ResetIsMaskingEnabled` <a name="ResetIsMaskingEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetIsMaskingEnabled"></a>

```go
func ResetIsMaskingEnabled()
```

##### `ResetMaskingColumnGroup` <a name="ResetMaskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetMaskingColumnGroup"></a>

```go
func ResetMaskingColumnGroup()
```

##### `ResetMaskingFormats` <a name="ResetMaskingFormats" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetMaskingFormats"></a>

```go
func ResetMaskingFormats()
```

##### `ResetObjectType` <a name="ResetObjectType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetObjectType"></a>

```go
func ResetObjectType()
```

##### `ResetSensitiveTypeId` <a name="ResetSensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetSensitiveTypeId"></a>

```go
func ResetSensitiveTypeId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeMaskingPoliciesMaskingColumn resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafemaskingpoliciesmaskingcolumn"

datasafemaskingpoliciesmaskingcolumn.DataSafeMaskingPoliciesMaskingColumn_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafemaskingpoliciesmaskingcolumn"

datasafemaskingpoliciesmaskingcolumn.DataSafeMaskingPoliciesMaskingColumn_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafemaskingpoliciesmaskingcolumn"

datasafemaskingpoliciesmaskingcolumn.DataSafeMaskingPoliciesMaskingColumn_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafemaskingpoliciesmaskingcolumn"

datasafemaskingpoliciesmaskingcolumn.DataSafeMaskingPoliciesMaskingColumn_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataSafeMaskingPoliciesMaskingColumn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSafeMaskingPoliciesMaskingColumn to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSafeMaskingPoliciesMaskingColumn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeMaskingPoliciesMaskingColumn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.childColumns">ChildColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingFormats">MaskingFormats</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference">DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.columnNameInput">ColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.isMaskingEnabledInput">IsMaskingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingColumnGroupInput">MaskingColumnGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingFormatsInput">MaskingFormatsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingPolicyIdInput">MaskingPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.objectTypeInput">ObjectTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.sensitiveTypeIdInput">SensitiveTypeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.isMaskingEnabled">IsMaskingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingColumnGroup">MaskingColumnGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingPolicyId">MaskingPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.sensitiveTypeId">SensitiveTypeId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChildColumns`<sup>Required</sup> <a name="ChildColumns" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.childColumns"></a>

```go
func ChildColumns() *[]*string
```

- *Type:* *[]*string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `MaskingFormats`<sup>Required</sup> <a name="MaskingFormats" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingFormats"></a>

```go
func MaskingFormats() DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeouts"></a>

```go
func Timeouts() DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference">DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.columnNameInput"></a>

```go
func ColumnNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsMaskingEnabledInput`<sup>Optional</sup> <a name="IsMaskingEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.isMaskingEnabledInput"></a>

```go
func IsMaskingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MaskingColumnGroupInput`<sup>Optional</sup> <a name="MaskingColumnGroupInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingColumnGroupInput"></a>

```go
func MaskingColumnGroupInput() *string
```

- *Type:* *string

---

##### `MaskingFormatsInput`<sup>Optional</sup> <a name="MaskingFormatsInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingFormatsInput"></a>

```go
func MaskingFormatsInput() interface{}
```

- *Type:* interface{}

---

##### `MaskingPolicyIdInput`<sup>Optional</sup> <a name="MaskingPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingPolicyIdInput"></a>

```go
func MaskingPolicyIdInput() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.objectTypeInput"></a>

```go
func ObjectTypeInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `SensitiveTypeIdInput`<sup>Optional</sup> <a name="SensitiveTypeIdInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.sensitiveTypeIdInput"></a>

```go
func SensitiveTypeIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsMaskingEnabled`<sup>Required</sup> <a name="IsMaskingEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.isMaskingEnabled"></a>

```go
func IsMaskingEnabled() interface{}
```

- *Type:* interface{}

---

##### `MaskingColumnGroup`<sup>Required</sup> <a name="MaskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingColumnGroup"></a>

```go
func MaskingColumnGroup() *string
```

- *Type:* *string

---

##### `MaskingPolicyId`<sup>Required</sup> <a name="MaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingPolicyId"></a>

```go
func MaskingPolicyId() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `SensitiveTypeId`<sup>Required</sup> <a name="SensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.sensitiveTypeId"></a>

```go
func SensitiveTypeId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeMaskingPoliciesMaskingColumnConfig <a name="DataSafeMaskingPoliciesMaskingColumnConfig" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafemaskingpoliciesmaskingcolumn"

&datasafemaskingpoliciesmaskingcolumn.DataSafeMaskingPoliciesMaskingColumnConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ColumnName: *string,
	MaskingPolicyId: *string,
	Object: *string,
	SchemaName: *string,
	Id: *string,
	IsMaskingEnabled: interface{},
	MaskingColumnGroup: *string,
	MaskingFormats: interface{},
	ObjectType: *string,
	SensitiveTypeId: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.columnName">ColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#column_name DataSafeMaskingPoliciesMaskingColumn#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.maskingPolicyId">MaskingPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_policy_id DataSafeMaskingPoliciesMaskingColumn#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.object">Object</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#object DataSafeMaskingPoliciesMaskingColumn#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#schema_name DataSafeMaskingPoliciesMaskingColumn#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#id DataSafeMaskingPoliciesMaskingColumn#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.isMaskingEnabled">IsMaskingEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#is_masking_enabled DataSafeMaskingPoliciesMaskingColumn#is_masking_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.maskingColumnGroup">MaskingColumnGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_column_group DataSafeMaskingPoliciesMaskingColumn#masking_column_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.maskingFormats">MaskingFormats</a></code> | <code>interface{}</code> | masking_formats block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.objectType">ObjectType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#object_type DataSafeMaskingPoliciesMaskingColumn#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.sensitiveTypeId">SensitiveTypeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#sensitive_type_id DataSafeMaskingPoliciesMaskingColumn#sensitive_type_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts">DataSafeMaskingPoliciesMaskingColumnTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.columnName"></a>

```go
ColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#column_name DataSafeMaskingPoliciesMaskingColumn#column_name}.

---

##### `MaskingPolicyId`<sup>Required</sup> <a name="MaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.maskingPolicyId"></a>

```go
MaskingPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_policy_id DataSafeMaskingPoliciesMaskingColumn#masking_policy_id}.

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.object"></a>

```go
Object *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#object DataSafeMaskingPoliciesMaskingColumn#object}.

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#schema_name DataSafeMaskingPoliciesMaskingColumn#schema_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#id DataSafeMaskingPoliciesMaskingColumn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsMaskingEnabled`<sup>Optional</sup> <a name="IsMaskingEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.isMaskingEnabled"></a>

```go
IsMaskingEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#is_masking_enabled DataSafeMaskingPoliciesMaskingColumn#is_masking_enabled}.

---

##### `MaskingColumnGroup`<sup>Optional</sup> <a name="MaskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.maskingColumnGroup"></a>

```go
MaskingColumnGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_column_group DataSafeMaskingPoliciesMaskingColumn#masking_column_group}.

---

##### `MaskingFormats`<sup>Optional</sup> <a name="MaskingFormats" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.maskingFormats"></a>

```go
MaskingFormats interface{}
```

- *Type:* interface{}

masking_formats block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_formats DataSafeMaskingPoliciesMaskingColumn#masking_formats}

---

##### `ObjectType`<sup>Optional</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.objectType"></a>

```go
ObjectType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#object_type DataSafeMaskingPoliciesMaskingColumn#object_type}.

---

##### `SensitiveTypeId`<sup>Optional</sup> <a name="SensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.sensitiveTypeId"></a>

```go
SensitiveTypeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#sensitive_type_id DataSafeMaskingPoliciesMaskingColumn#sensitive_type_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.timeouts"></a>

```go
Timeouts DataSafeMaskingPoliciesMaskingColumnTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts">DataSafeMaskingPoliciesMaskingColumnTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#timeouts DataSafeMaskingPoliciesMaskingColumn#timeouts}

---

### DataSafeMaskingPoliciesMaskingColumnMaskingFormats <a name="DataSafeMaskingPoliciesMaskingColumnMaskingFormats" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafemaskingpoliciesmaskingcolumn"

&datasafemaskingpoliciesmaskingcolumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats {
	FormatEntries: interface{},
	Condition: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats.property.formatEntries">FormatEntries</a></code> | <code>interface{}</code> | format_entries block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats.property.condition">Condition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#condition DataSafeMaskingPoliciesMaskingColumn#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#description DataSafeMaskingPoliciesMaskingColumn#description}. |

---

##### `FormatEntries`<sup>Required</sup> <a name="FormatEntries" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats.property.formatEntries"></a>

```go
FormatEntries interface{}
```

- *Type:* interface{}

format_entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#format_entries DataSafeMaskingPoliciesMaskingColumn#format_entries}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#condition DataSafeMaskingPoliciesMaskingColumn#condition}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#description DataSafeMaskingPoliciesMaskingColumn#description}.

---

### DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries <a name="DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafemaskingpoliciesmaskingcolumn"

&datasafemaskingpoliciesmaskingcolumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#type DataSafeMaskingPoliciesMaskingColumn#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.columnName">ColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#column_name DataSafeMaskingPoliciesMaskingColumn#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#description DataSafeMaskingPoliciesMaskingColumn#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.endDate">EndDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#end_date DataSafeMaskingPoliciesMaskingColumn#end_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.endLength">EndLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#end_length DataSafeMaskingPoliciesMaskingColumn#end_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.endValue">EndValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#end_value DataSafeMaskingPoliciesMaskingColumn#end_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.fixedNumber">FixedNumber</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#fixed_number DataSafeMaskingPoliciesMaskingColumn#fixed_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.fixedString">FixedString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#fixed_string DataSafeMaskingPoliciesMaskingColumn#fixed_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.groupingColumns">GroupingColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#grouping_columns DataSafeMaskingPoliciesMaskingColumn#grouping_columns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.length">Length</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#length DataSafeMaskingPoliciesMaskingColumn#length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.libraryMaskingFormatId">LibraryMaskingFormatId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#library_masking_format_id DataSafeMaskingPoliciesMaskingColumn#library_masking_format_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.pattern">Pattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#pattern DataSafeMaskingPoliciesMaskingColumn#pattern}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.postProcessingFunction">PostProcessingFunction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#post_processing_function DataSafeMaskingPoliciesMaskingColumn#post_processing_function}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.randomList">RandomList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#random_list DataSafeMaskingPoliciesMaskingColumn#random_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.regularExpression">RegularExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#regular_expression DataSafeMaskingPoliciesMaskingColumn#regular_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.replaceWith">ReplaceWith</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#replace_with DataSafeMaskingPoliciesMaskingColumn#replace_with}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#schema_name DataSafeMaskingPoliciesMaskingColumn#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#sql_expression DataSafeMaskingPoliciesMaskingColumn#sql_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startDate">StartDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_date DataSafeMaskingPoliciesMaskingColumn#start_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startLength">StartLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_length DataSafeMaskingPoliciesMaskingColumn#start_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startPosition">StartPosition</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_position DataSafeMaskingPoliciesMaskingColumn#start_position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startValue">StartValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_value DataSafeMaskingPoliciesMaskingColumn#start_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#table_name DataSafeMaskingPoliciesMaskingColumn#table_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.userDefinedFunction">UserDefinedFunction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#user_defined_function DataSafeMaskingPoliciesMaskingColumn#user_defined_function}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#type DataSafeMaskingPoliciesMaskingColumn#type}.

---

##### `ColumnName`<sup>Optional</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.columnName"></a>

```go
ColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#column_name DataSafeMaskingPoliciesMaskingColumn#column_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#description DataSafeMaskingPoliciesMaskingColumn#description}.

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.endDate"></a>

```go
EndDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#end_date DataSafeMaskingPoliciesMaskingColumn#end_date}.

---

##### `EndLength`<sup>Optional</sup> <a name="EndLength" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.endLength"></a>

```go
EndLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#end_length DataSafeMaskingPoliciesMaskingColumn#end_length}.

---

##### `EndValue`<sup>Optional</sup> <a name="EndValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.endValue"></a>

```go
EndValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#end_value DataSafeMaskingPoliciesMaskingColumn#end_value}.

---

##### `FixedNumber`<sup>Optional</sup> <a name="FixedNumber" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.fixedNumber"></a>

```go
FixedNumber *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#fixed_number DataSafeMaskingPoliciesMaskingColumn#fixed_number}.

---

##### `FixedString`<sup>Optional</sup> <a name="FixedString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.fixedString"></a>

```go
FixedString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#fixed_string DataSafeMaskingPoliciesMaskingColumn#fixed_string}.

---

##### `GroupingColumns`<sup>Optional</sup> <a name="GroupingColumns" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.groupingColumns"></a>

```go
GroupingColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#grouping_columns DataSafeMaskingPoliciesMaskingColumn#grouping_columns}.

---

##### `Length`<sup>Optional</sup> <a name="Length" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.length"></a>

```go
Length *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#length DataSafeMaskingPoliciesMaskingColumn#length}.

---

##### `LibraryMaskingFormatId`<sup>Optional</sup> <a name="LibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.libraryMaskingFormatId"></a>

```go
LibraryMaskingFormatId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#library_masking_format_id DataSafeMaskingPoliciesMaskingColumn#library_masking_format_id}.

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#pattern DataSafeMaskingPoliciesMaskingColumn#pattern}.

---

##### `PostProcessingFunction`<sup>Optional</sup> <a name="PostProcessingFunction" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.postProcessingFunction"></a>

```go
PostProcessingFunction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#post_processing_function DataSafeMaskingPoliciesMaskingColumn#post_processing_function}.

---

##### `RandomList`<sup>Optional</sup> <a name="RandomList" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.randomList"></a>

```go
RandomList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#random_list DataSafeMaskingPoliciesMaskingColumn#random_list}.

---

##### `RegularExpression`<sup>Optional</sup> <a name="RegularExpression" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.regularExpression"></a>

```go
RegularExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#regular_expression DataSafeMaskingPoliciesMaskingColumn#regular_expression}.

---

##### `ReplaceWith`<sup>Optional</sup> <a name="ReplaceWith" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.replaceWith"></a>

```go
ReplaceWith *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#replace_with DataSafeMaskingPoliciesMaskingColumn#replace_with}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#schema_name DataSafeMaskingPoliciesMaskingColumn#schema_name}.

---

##### `SqlExpression`<sup>Optional</sup> <a name="SqlExpression" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.sqlExpression"></a>

```go
SqlExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#sql_expression DataSafeMaskingPoliciesMaskingColumn#sql_expression}.

---

##### `StartDate`<sup>Optional</sup> <a name="StartDate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startDate"></a>

```go
StartDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_date DataSafeMaskingPoliciesMaskingColumn#start_date}.

---

##### `StartLength`<sup>Optional</sup> <a name="StartLength" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startLength"></a>

```go
StartLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_length DataSafeMaskingPoliciesMaskingColumn#start_length}.

---

##### `StartPosition`<sup>Optional</sup> <a name="StartPosition" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startPosition"></a>

```go
StartPosition *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_position DataSafeMaskingPoliciesMaskingColumn#start_position}.

---

##### `StartValue`<sup>Optional</sup> <a name="StartValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startValue"></a>

```go
StartValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_value DataSafeMaskingPoliciesMaskingColumn#start_value}.

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#table_name DataSafeMaskingPoliciesMaskingColumn#table_name}.

---

##### `UserDefinedFunction`<sup>Optional</sup> <a name="UserDefinedFunction" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.userDefinedFunction"></a>

```go
UserDefinedFunction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#user_defined_function DataSafeMaskingPoliciesMaskingColumn#user_defined_function}.

---

### DataSafeMaskingPoliciesMaskingColumnTimeouts <a name="DataSafeMaskingPoliciesMaskingColumnTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafemaskingpoliciesmaskingcolumn"

&datasafemaskingpoliciesmaskingcolumn.DataSafeMaskingPoliciesMaskingColumnTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#create DataSafeMaskingPoliciesMaskingColumn#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#delete DataSafeMaskingPoliciesMaskingColumn#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#update DataSafeMaskingPoliciesMaskingColumn#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#create DataSafeMaskingPoliciesMaskingColumn#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#delete DataSafeMaskingPoliciesMaskingColumn#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#update DataSafeMaskingPoliciesMaskingColumn#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList <a name="DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafemaskingpoliciesmaskingcolumn"

datasafemaskingpoliciesmaskingcolumn.NewDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.get"></a>

```go
func Get(index *f64) DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference <a name="DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafemaskingpoliciesmaskingcolumn"

datasafemaskingpoliciesmaskingcolumn.NewDataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetColumnName">ResetColumnName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetEndLength">ResetEndLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetEndValue">ResetEndValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetFixedNumber">ResetFixedNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetFixedString">ResetFixedString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetGroupingColumns">ResetGroupingColumns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetLength">ResetLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetLibraryMaskingFormatId">ResetLibraryMaskingFormatId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetPostProcessingFunction">ResetPostProcessingFunction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetRandomList">ResetRandomList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetRegularExpression">ResetRegularExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetReplaceWith">ResetReplaceWith</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetSqlExpression">ResetSqlExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartDate">ResetStartDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartLength">ResetStartLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartPosition">ResetStartPosition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartValue">ResetStartValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetUserDefinedFunction">ResetUserDefinedFunction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnName` <a name="ResetColumnName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetColumnName"></a>

```go
func ResetColumnName()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEndDate` <a name="ResetEndDate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetEndDate"></a>

```go
func ResetEndDate()
```

##### `ResetEndLength` <a name="ResetEndLength" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetEndLength"></a>

```go
func ResetEndLength()
```

##### `ResetEndValue` <a name="ResetEndValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetEndValue"></a>

```go
func ResetEndValue()
```

##### `ResetFixedNumber` <a name="ResetFixedNumber" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetFixedNumber"></a>

```go
func ResetFixedNumber()
```

##### `ResetFixedString` <a name="ResetFixedString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetFixedString"></a>

```go
func ResetFixedString()
```

##### `ResetGroupingColumns` <a name="ResetGroupingColumns" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetGroupingColumns"></a>

```go
func ResetGroupingColumns()
```

##### `ResetLength` <a name="ResetLength" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetLength"></a>

```go
func ResetLength()
```

##### `ResetLibraryMaskingFormatId` <a name="ResetLibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetLibraryMaskingFormatId"></a>

```go
func ResetLibraryMaskingFormatId()
```

##### `ResetPattern` <a name="ResetPattern" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetPattern"></a>

```go
func ResetPattern()
```

##### `ResetPostProcessingFunction` <a name="ResetPostProcessingFunction" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetPostProcessingFunction"></a>

```go
func ResetPostProcessingFunction()
```

##### `ResetRandomList` <a name="ResetRandomList" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetRandomList"></a>

```go
func ResetRandomList()
```

##### `ResetRegularExpression` <a name="ResetRegularExpression" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetRegularExpression"></a>

```go
func ResetRegularExpression()
```

##### `ResetReplaceWith` <a name="ResetReplaceWith" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetReplaceWith"></a>

```go
func ResetReplaceWith()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetSchemaName"></a>

```go
func ResetSchemaName()
```

##### `ResetSqlExpression` <a name="ResetSqlExpression" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetSqlExpression"></a>

```go
func ResetSqlExpression()
```

##### `ResetStartDate` <a name="ResetStartDate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartDate"></a>

```go
func ResetStartDate()
```

##### `ResetStartLength` <a name="ResetStartLength" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartLength"></a>

```go
func ResetStartLength()
```

##### `ResetStartPosition` <a name="ResetStartPosition" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartPosition"></a>

```go
func ResetStartPosition()
```

##### `ResetStartValue` <a name="ResetStartValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartValue"></a>

```go
func ResetStartValue()
```

##### `ResetTableName` <a name="ResetTableName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetTableName"></a>

```go
func ResetTableName()
```

##### `ResetUserDefinedFunction` <a name="ResetUserDefinedFunction" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetUserDefinedFunction"></a>

```go
func ResetUserDefinedFunction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endDateInput">EndDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endLengthInput">EndLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endValueInput">EndValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedNumberInput">FixedNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedStringInput">FixedStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.groupingColumnsInput">GroupingColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.lengthInput">LengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.libraryMaskingFormatIdInput">LibraryMaskingFormatIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.postProcessingFunctionInput">PostProcessingFunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.randomListInput">RandomListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.regularExpressionInput">RegularExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.replaceWithInput">ReplaceWithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.sqlExpressionInput">SqlExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startDateInput">StartDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startLengthInput">StartLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startPositionInput">StartPositionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startValueInput">StartValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.userDefinedFunctionInput">UserDefinedFunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endDate">EndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endLength">EndLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endValue">EndValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedNumber">FixedNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedString">FixedString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.groupingColumns">GroupingColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.length">Length</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.libraryMaskingFormatId">LibraryMaskingFormatId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.postProcessingFunction">PostProcessingFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.randomList">RandomList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.regularExpression">RegularExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.replaceWith">ReplaceWith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startDate">StartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startLength">StartLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startPosition">StartPosition</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startValue">StartValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.userDefinedFunction">UserDefinedFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.columnNameInput"></a>

```go
func ColumnNameInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endDateInput"></a>

```go
func EndDateInput() *string
```

- *Type:* *string

---

##### `EndLengthInput`<sup>Optional</sup> <a name="EndLengthInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endLengthInput"></a>

```go
func EndLengthInput() *f64
```

- *Type:* *f64

---

##### `EndValueInput`<sup>Optional</sup> <a name="EndValueInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endValueInput"></a>

```go
func EndValueInput() *f64
```

- *Type:* *f64

---

##### `FixedNumberInput`<sup>Optional</sup> <a name="FixedNumberInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedNumberInput"></a>

```go
func FixedNumberInput() *f64
```

- *Type:* *f64

---

##### `FixedStringInput`<sup>Optional</sup> <a name="FixedStringInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedStringInput"></a>

```go
func FixedStringInput() *string
```

- *Type:* *string

---

##### `GroupingColumnsInput`<sup>Optional</sup> <a name="GroupingColumnsInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.groupingColumnsInput"></a>

```go
func GroupingColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LengthInput`<sup>Optional</sup> <a name="LengthInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.lengthInput"></a>

```go
func LengthInput() *f64
```

- *Type:* *f64

---

##### `LibraryMaskingFormatIdInput`<sup>Optional</sup> <a name="LibraryMaskingFormatIdInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.libraryMaskingFormatIdInput"></a>

```go
func LibraryMaskingFormatIdInput() *string
```

- *Type:* *string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `PostProcessingFunctionInput`<sup>Optional</sup> <a name="PostProcessingFunctionInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.postProcessingFunctionInput"></a>

```go
func PostProcessingFunctionInput() *string
```

- *Type:* *string

---

##### `RandomListInput`<sup>Optional</sup> <a name="RandomListInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.randomListInput"></a>

```go
func RandomListInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegularExpressionInput`<sup>Optional</sup> <a name="RegularExpressionInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.regularExpressionInput"></a>

```go
func RegularExpressionInput() *string
```

- *Type:* *string

---

##### `ReplaceWithInput`<sup>Optional</sup> <a name="ReplaceWithInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.replaceWithInput"></a>

```go
func ReplaceWithInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `SqlExpressionInput`<sup>Optional</sup> <a name="SqlExpressionInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.sqlExpressionInput"></a>

```go
func SqlExpressionInput() *string
```

- *Type:* *string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startDateInput"></a>

```go
func StartDateInput() *string
```

- *Type:* *string

---

##### `StartLengthInput`<sup>Optional</sup> <a name="StartLengthInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startLengthInput"></a>

```go
func StartLengthInput() *f64
```

- *Type:* *f64

---

##### `StartPositionInput`<sup>Optional</sup> <a name="StartPositionInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startPositionInput"></a>

```go
func StartPositionInput() *f64
```

- *Type:* *f64

---

##### `StartValueInput`<sup>Optional</sup> <a name="StartValueInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startValueInput"></a>

```go
func StartValueInput() *f64
```

- *Type:* *f64

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UserDefinedFunctionInput`<sup>Optional</sup> <a name="UserDefinedFunctionInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.userDefinedFunctionInput"></a>

```go
func UserDefinedFunctionInput() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endDate"></a>

```go
func EndDate() *string
```

- *Type:* *string

---

##### `EndLength`<sup>Required</sup> <a name="EndLength" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endLength"></a>

```go
func EndLength() *f64
```

- *Type:* *f64

---

##### `EndValue`<sup>Required</sup> <a name="EndValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endValue"></a>

```go
func EndValue() *f64
```

- *Type:* *f64

---

##### `FixedNumber`<sup>Required</sup> <a name="FixedNumber" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedNumber"></a>

```go
func FixedNumber() *f64
```

- *Type:* *f64

---

##### `FixedString`<sup>Required</sup> <a name="FixedString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedString"></a>

```go
func FixedString() *string
```

- *Type:* *string

---

##### `GroupingColumns`<sup>Required</sup> <a name="GroupingColumns" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.groupingColumns"></a>

```go
func GroupingColumns() *[]*string
```

- *Type:* *[]*string

---

##### `Length`<sup>Required</sup> <a name="Length" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.length"></a>

```go
func Length() *f64
```

- *Type:* *f64

---

##### `LibraryMaskingFormatId`<sup>Required</sup> <a name="LibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.libraryMaskingFormatId"></a>

```go
func LibraryMaskingFormatId() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `PostProcessingFunction`<sup>Required</sup> <a name="PostProcessingFunction" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.postProcessingFunction"></a>

```go
func PostProcessingFunction() *string
```

- *Type:* *string

---

##### `RandomList`<sup>Required</sup> <a name="RandomList" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.randomList"></a>

```go
func RandomList() *[]*string
```

- *Type:* *[]*string

---

##### `RegularExpression`<sup>Required</sup> <a name="RegularExpression" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.regularExpression"></a>

```go
func RegularExpression() *string
```

- *Type:* *string

---

##### `ReplaceWith`<sup>Required</sup> <a name="ReplaceWith" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.replaceWith"></a>

```go
func ReplaceWith() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.sqlExpression"></a>

```go
func SqlExpression() *string
```

- *Type:* *string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startDate"></a>

```go
func StartDate() *string
```

- *Type:* *string

---

##### `StartLength`<sup>Required</sup> <a name="StartLength" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startLength"></a>

```go
func StartLength() *f64
```

- *Type:* *f64

---

##### `StartPosition`<sup>Required</sup> <a name="StartPosition" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startPosition"></a>

```go
func StartPosition() *f64
```

- *Type:* *f64

---

##### `StartValue`<sup>Required</sup> <a name="StartValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startValue"></a>

```go
func StartValue() *f64
```

- *Type:* *f64

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserDefinedFunction`<sup>Required</sup> <a name="UserDefinedFunction" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.userDefinedFunction"></a>

```go
func UserDefinedFunction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList <a name="DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafemaskingpoliciesmaskingcolumn"

datasafemaskingpoliciesmaskingcolumn.NewDataSafeMaskingPoliciesMaskingColumnMaskingFormatsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.get"></a>

```go
func Get(index *f64) DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference <a name="DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafemaskingpoliciesmaskingcolumn"

datasafemaskingpoliciesmaskingcolumn.NewDataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.putFormatEntries">PutFormatEntries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFormatEntries` <a name="PutFormatEntries" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.putFormatEntries"></a>

```go
func PutFormatEntries(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.putFormatEntries.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCondition` <a name="ResetCondition" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.formatEntries">FormatEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.formatEntriesInput">FormatEntriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FormatEntries`<sup>Required</sup> <a name="FormatEntries" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.formatEntries"></a>

```go
func FormatEntries() DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FormatEntriesInput`<sup>Optional</sup> <a name="FormatEntriesInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.formatEntriesInput"></a>

```go
func FormatEntriesInput() interface{}
```

- *Type:* interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference <a name="DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafemaskingpoliciesmaskingcolumn"

datasafemaskingpoliciesmaskingcolumn.NewDataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



