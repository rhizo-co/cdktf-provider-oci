# `dataOciCoreVolumeBackupPolicyAssignments` Submodule <a name="`dataOciCoreVolumeBackupPolicyAssignments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVolumeBackupPolicyAssignments <a name="DataOciCoreVolumeBackupPolicyAssignments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments oci_core_volume_backup_policy_assignments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevolumebackuppolicyassignments"

dataocicorevolumebackuppolicyassignments.NewDataOciCoreVolumeBackupPolicyAssignments(scope Construct, id *string, config DataOciCoreVolumeBackupPolicyAssignmentsConfig) DataOciCoreVolumeBackupPolicyAssignments
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig">DataOciCoreVolumeBackupPolicyAssignmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig">DataOciCoreVolumeBackupPolicyAssignmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreVolumeBackupPolicyAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevolumebackuppolicyassignments"

dataocicorevolumebackuppolicyassignments.DataOciCoreVolumeBackupPolicyAssignments_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevolumebackuppolicyassignments"

dataocicorevolumebackuppolicyassignments.DataOciCoreVolumeBackupPolicyAssignments_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevolumebackuppolicyassignments"

dataocicorevolumebackuppolicyassignments.DataOciCoreVolumeBackupPolicyAssignments_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevolumebackuppolicyassignments"

dataocicorevolumebackuppolicyassignments.DataOciCoreVolumeBackupPolicyAssignments_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreVolumeBackupPolicyAssignments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreVolumeBackupPolicyAssignments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreVolumeBackupPolicyAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVolumeBackupPolicyAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList">DataOciCoreVolumeBackupPolicyAssignmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.volumeBackupPolicyAssignments">VolumeBackupPolicyAssignments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList">DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.assetIdInput">AssetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.assetId">AssetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.filter"></a>

```go
func Filter() DataOciCoreVolumeBackupPolicyAssignmentsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList">DataOciCoreVolumeBackupPolicyAssignmentsFilterList</a>

---

##### `VolumeBackupPolicyAssignments`<sup>Required</sup> <a name="VolumeBackupPolicyAssignments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.volumeBackupPolicyAssignments"></a>

```go
func VolumeBackupPolicyAssignments() DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList">DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList</a>

---

##### `AssetIdInput`<sup>Optional</sup> <a name="AssetIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.assetIdInput"></a>

```go
func AssetIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.assetId"></a>

```go
func AssetId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignments.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVolumeBackupPolicyAssignmentsConfig <a name="DataOciCoreVolumeBackupPolicyAssignmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevolumebackuppolicyassignments"

&dataocicorevolumebackuppolicyassignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AssetId: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.assetId">AssetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#asset_id DataOciCoreVolumeBackupPolicyAssignments#asset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#id DataOciCoreVolumeBackupPolicyAssignments#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.assetId"></a>

```go
AssetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#asset_id DataOciCoreVolumeBackupPolicyAssignments#asset_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#filter DataOciCoreVolumeBackupPolicyAssignments#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#id DataOciCoreVolumeBackupPolicyAssignments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreVolumeBackupPolicyAssignmentsFilter <a name="DataOciCoreVolumeBackupPolicyAssignmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevolumebackuppolicyassignments"

&dataocicorevolumebackuppolicyassignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#name DataOciCoreVolumeBackupPolicyAssignments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#values DataOciCoreVolumeBackupPolicyAssignments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#regex DataOciCoreVolumeBackupPolicyAssignments#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#name DataOciCoreVolumeBackupPolicyAssignments#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#values DataOciCoreVolumeBackupPolicyAssignments#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_backup_policy_assignments#regex DataOciCoreVolumeBackupPolicyAssignments#regex}.

---

### DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments <a name="DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevolumebackuppolicyassignments"

&dataocicorevolumebackuppolicyassignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVolumeBackupPolicyAssignmentsFilterList <a name="DataOciCoreVolumeBackupPolicyAssignmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevolumebackuppolicyassignments"

dataocicorevolumebackuppolicyassignments.NewDataOciCoreVolumeBackupPolicyAssignmentsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreVolumeBackupPolicyAssignmentsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.get"></a>

```go
func Get(index *f64) DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference <a name="DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevolumebackuppolicyassignments"

dataocicorevolumebackuppolicyassignments.NewDataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList <a name="DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevolumebackuppolicyassignments"

dataocicorevolumebackuppolicyassignments.NewDataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.get"></a>

```go
func Get(index *f64) DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference <a name="DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevolumebackuppolicyassignments"

dataocicorevolumebackuppolicyassignments.NewDataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.assetId">AssetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.xrcKmsKeyId">XrcKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments">DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.assetId"></a>

```go
func AssetId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `XrcKmsKeyId`<sup>Required</sup> <a name="XrcKmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.xrcKmsKeyId"></a>

```go
func XrcKmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeBackupPolicyAssignments.DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments">DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments</a>

---



