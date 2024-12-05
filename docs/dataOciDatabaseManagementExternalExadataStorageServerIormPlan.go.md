# `dataOciDatabaseManagementExternalExadataStorageServerIormPlan` Submodule <a name="`dataOciDatabaseManagementExternalExadataStorageServerIormPlan` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalExadataStorageServerIormPlan <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan oci_database_management_external_exadata_storage_server_iorm_plan}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageserveriormplan"

dataocidatabasemanagementexternalexadatastorageserveriormplan.NewDataOciDatabaseManagementExternalExadataStorageServerIormPlan(scope Construct, id *string, config DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig) DataOciDatabaseManagementExternalExadataStorageServerIormPlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig">DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig">DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageServerIormPlan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageserveriormplan"

dataocidatabasemanagementexternalexadatastorageserveriormplan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageserveriormplan"

dataocidatabasemanagementexternalexadatastorageserveriormplan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageserveriormplan"

dataocidatabasemanagementexternalexadatastorageserveriormplan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageserveriormplan"

dataocidatabasemanagementexternalexadatastorageserveriormplan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageServerIormPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementExternalExadataStorageServerIormPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementExternalExadataStorageServerIormPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalExadataStorageServerIormPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.dbPlan">DbPlan</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.planObjective">PlanObjective</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.planStatus">PlanStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.externalExadataStorageServerIdInput">ExternalExadataStorageServerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.externalExadataStorageServerId">ExternalExadataStorageServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DbPlan`<sup>Required</sup> <a name="DbPlan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.dbPlan"></a>

```go
func DbPlan() DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList</a>

---

##### `PlanObjective`<sup>Required</sup> <a name="PlanObjective" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.planObjective"></a>

```go
func PlanObjective() *string
```

- *Type:* *string

---

##### `PlanStatus`<sup>Required</sup> <a name="PlanStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.planStatus"></a>

```go
func PlanStatus() *string
```

- *Type:* *string

---

##### `ExternalExadataStorageServerIdInput`<sup>Optional</sup> <a name="ExternalExadataStorageServerIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.externalExadataStorageServerIdInput"></a>

```go
func ExternalExadataStorageServerIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ExternalExadataStorageServerId`<sup>Required</sup> <a name="ExternalExadataStorageServerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.externalExadataStorageServerId"></a>

```go
func ExternalExadataStorageServerId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageserveriormplan"

&dataocidatabasemanagementexternalexadatastorageserveriormplan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExternalExadataStorageServerId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.externalExadataStorageServerId">ExternalExadataStorageServerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan#external_exadata_storage_server_id DataOciDatabaseManagementExternalExadataStorageServerIormPlan#external_exadata_storage_server_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan#id DataOciDatabaseManagementExternalExadataStorageServerIormPlan#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExternalExadataStorageServerId`<sup>Required</sup> <a name="ExternalExadataStorageServerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.externalExadataStorageServerId"></a>

```go
ExternalExadataStorageServerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan#external_exadata_storage_server_id DataOciDatabaseManagementExternalExadataStorageServerIormPlan#external_exadata_storage_server_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_iorm_plan#id DataOciDatabaseManagementExternalExadataStorageServerIormPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageserveriormplan"

&dataocidatabasemanagementexternalexadatastorageserveriormplan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan {

}
```


### DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageserveriormplan"

&dataocidatabasemanagementexternalexadatastorageserveriormplan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageserveriormplan"

dataocidatabasemanagementexternalexadatastorageserveriormplan.NewDataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageserveriormplan"

dataocidatabasemanagementexternalexadatastorageserveriormplan.NewDataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.allocation">Allocation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.asmCluster">AsmCluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.flashCacheLimit">FlashCacheLimit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.flashCacheMin">FlashCacheMin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.flashCacheSize">FlashCacheSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isFlashCacheOn">IsFlashCacheOn</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isFlashLogOn">IsFlashLogOn</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isPmemCacheOn">IsPmemCacheOn</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isPmemLogOn">IsPmemLogOn</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.level">Level</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.limit">Limit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.pmemCacheLimit">PmemCacheLimit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.pmemCacheMin">PmemCacheMin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.pmemCacheSize">PmemCacheSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.share">Share</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Allocation`<sup>Required</sup> <a name="Allocation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.allocation"></a>

```go
func Allocation() *f64
```

- *Type:* *f64

---

##### `AsmCluster`<sup>Required</sup> <a name="AsmCluster" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.asmCluster"></a>

```go
func AsmCluster() *string
```

- *Type:* *string

---

##### `FlashCacheLimit`<sup>Required</sup> <a name="FlashCacheLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.flashCacheLimit"></a>

```go
func FlashCacheLimit() *string
```

- *Type:* *string

---

##### `FlashCacheMin`<sup>Required</sup> <a name="FlashCacheMin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.flashCacheMin"></a>

```go
func FlashCacheMin() *string
```

- *Type:* *string

---

##### `FlashCacheSize`<sup>Required</sup> <a name="FlashCacheSize" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.flashCacheSize"></a>

```go
func FlashCacheSize() *string
```

- *Type:* *string

---

##### `IsFlashCacheOn`<sup>Required</sup> <a name="IsFlashCacheOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isFlashCacheOn"></a>

```go
func IsFlashCacheOn() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsFlashLogOn`<sup>Required</sup> <a name="IsFlashLogOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isFlashLogOn"></a>

```go
func IsFlashLogOn() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPmemCacheOn`<sup>Required</sup> <a name="IsPmemCacheOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isPmemCacheOn"></a>

```go
func IsPmemCacheOn() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPmemLogOn`<sup>Required</sup> <a name="IsPmemLogOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.isPmemLogOn"></a>

```go
func IsPmemLogOn() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Level`<sup>Required</sup> <a name="Level" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.level"></a>

```go
func Level() *f64
```

- *Type:* *f64

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.limit"></a>

```go
func Limit() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PmemCacheLimit`<sup>Required</sup> <a name="PmemCacheLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.pmemCacheLimit"></a>

```go
func PmemCacheLimit() *string
```

- *Type:* *string

---

##### `PmemCacheMin`<sup>Required</sup> <a name="PmemCacheMin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.pmemCacheMin"></a>

```go
func PmemCacheMin() *string
```

- *Type:* *string

---

##### `PmemCacheSize`<sup>Required</sup> <a name="PmemCacheSize" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.pmemCacheSize"></a>

```go
func PmemCacheSize() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Share`<sup>Required</sup> <a name="Share" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.share"></a>

```go
func Share() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItems</a>

---


### DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageserveriormplan"

dataocidatabasemanagementexternalexadatastorageserveriormplan.NewDataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageserveriormplan"

dataocidatabasemanagementexternalexadatastorageserveriormplan.NewDataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.items"></a>

```go
func Items() DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlanOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerIormPlan.DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan">DataOciDatabaseManagementExternalExadataStorageServerIormPlanDbPlan</a>

---



