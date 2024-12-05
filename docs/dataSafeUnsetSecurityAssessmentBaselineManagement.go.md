# `dataSafeUnsetSecurityAssessmentBaselineManagement` Submodule <a name="`dataSafeUnsetSecurityAssessmentBaselineManagement` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeUnsetSecurityAssessmentBaselineManagement <a name="DataSafeUnsetSecurityAssessmentBaselineManagement" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline_management oci_data_safe_unset_security_assessment_baseline_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafeunsetsecurityassessmentbaselinemanagement"

datasafeunsetsecurityassessmentbaselinemanagement.NewDataSafeUnsetSecurityAssessmentBaselineManagement(scope Construct, id *string, config DataSafeUnsetSecurityAssessmentBaselineManagementConfig) DataSafeUnsetSecurityAssessmentBaselineManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig">DataSafeUnsetSecurityAssessmentBaselineManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig">DataSafeUnsetSecurityAssessmentBaselineManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.putTimeouts"></a>

```go
func PutTimeouts(value DataSafeUnsetSecurityAssessmentBaselineManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeouts">DataSafeUnsetSecurityAssessmentBaselineManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeUnsetSecurityAssessmentBaselineManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafeunsetsecurityassessmentbaselinemanagement"

datasafeunsetsecurityassessmentbaselinemanagement.DataSafeUnsetSecurityAssessmentBaselineManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafeunsetsecurityassessmentbaselinemanagement"

datasafeunsetsecurityassessmentbaselinemanagement.DataSafeUnsetSecurityAssessmentBaselineManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafeunsetsecurityassessmentbaselinemanagement"

datasafeunsetsecurityassessmentbaselinemanagement.DataSafeUnsetSecurityAssessmentBaselineManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafeunsetsecurityassessmentbaselinemanagement"

datasafeunsetsecurityassessmentbaselinemanagement.DataSafeUnsetSecurityAssessmentBaselineManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataSafeUnsetSecurityAssessmentBaselineManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSafeUnsetSecurityAssessmentBaselineManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSafeUnsetSecurityAssessmentBaselineManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeUnsetSecurityAssessmentBaselineManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference">DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.securityAssessmentIdInput">SecurityAssessmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.securityAssessmentId">SecurityAssessmentId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.timeouts"></a>

```go
func Timeouts() DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference">DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SecurityAssessmentIdInput`<sup>Optional</sup> <a name="SecurityAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.securityAssessmentIdInput"></a>

```go
func SecurityAssessmentIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SecurityAssessmentId`<sup>Required</sup> <a name="SecurityAssessmentId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.securityAssessmentId"></a>

```go
func SecurityAssessmentId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeUnsetSecurityAssessmentBaselineManagementConfig <a name="DataSafeUnsetSecurityAssessmentBaselineManagementConfig" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafeunsetsecurityassessmentbaselinemanagement"

&datasafeunsetsecurityassessmentbaselinemanagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	SecurityAssessmentId: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline_management#compartment_id DataSafeUnsetSecurityAssessmentBaselineManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig.property.securityAssessmentId">SecurityAssessmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline_management#security_assessment_id DataSafeUnsetSecurityAssessmentBaselineManagement#security_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline_management#id DataSafeUnsetSecurityAssessmentBaselineManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeouts">DataSafeUnsetSecurityAssessmentBaselineManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline_management#compartment_id DataSafeUnsetSecurityAssessmentBaselineManagement#compartment_id}.

---

##### `SecurityAssessmentId`<sup>Required</sup> <a name="SecurityAssessmentId" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig.property.securityAssessmentId"></a>

```go
SecurityAssessmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline_management#security_assessment_id DataSafeUnsetSecurityAssessmentBaselineManagement#security_assessment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline_management#id DataSafeUnsetSecurityAssessmentBaselineManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementConfig.property.timeouts"></a>

```go
Timeouts DataSafeUnsetSecurityAssessmentBaselineManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeouts">DataSafeUnsetSecurityAssessmentBaselineManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline_management#timeouts DataSafeUnsetSecurityAssessmentBaselineManagement#timeouts}

---

### DataSafeUnsetSecurityAssessmentBaselineManagementTimeouts <a name="DataSafeUnsetSecurityAssessmentBaselineManagementTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafeunsetsecurityassessmentbaselinemanagement"

&datasafeunsetsecurityassessmentbaselinemanagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline_management#create DataSafeUnsetSecurityAssessmentBaselineManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline_management#delete DataSafeUnsetSecurityAssessmentBaselineManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline_management#update DataSafeUnsetSecurityAssessmentBaselineManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline_management#create DataSafeUnsetSecurityAssessmentBaselineManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline_management#delete DataSafeUnsetSecurityAssessmentBaselineManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline_management#update DataSafeUnsetSecurityAssessmentBaselineManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference <a name="DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafeunsetsecurityassessmentbaselinemanagement"

datasafeunsetsecurityassessmentbaselinemanagement.NewDataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaselineManagement.DataSafeUnsetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



