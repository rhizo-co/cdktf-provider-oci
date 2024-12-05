# `dataOciDatabaseManagementExternalAsmInstances` Submodule <a name="`dataOciDatabaseManagementExternalAsmInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalAsmInstances <a name="DataOciDatabaseManagementExternalAsmInstances" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_instances oci_database_management_external_asm_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasminstances"

dataocidatabasemanagementexternalasminstances.NewDataOciDatabaseManagementExternalAsmInstances(scope Construct, id *string, config DataOciDatabaseManagementExternalAsmInstancesConfig) DataOciDatabaseManagementExternalAsmInstances
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig">DataOciDatabaseManagementExternalAsmInstancesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig">DataOciDatabaseManagementExternalAsmInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.resetExternalAsmId">ResetExternalAsmId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetExternalAsmId` <a name="ResetExternalAsmId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.resetExternalAsmId"></a>

```go
func ResetExternalAsmId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalAsmInstances resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasminstances"

dataocidatabasemanagementexternalasminstances.DataOciDatabaseManagementExternalAsmInstances_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasminstances"

dataocidatabasemanagementexternalasminstances.DataOciDatabaseManagementExternalAsmInstances_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasminstances"

dataocidatabasemanagementexternalasminstances.DataOciDatabaseManagementExternalAsmInstances_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasminstances"

dataocidatabasemanagementexternalasminstances.DataOciDatabaseManagementExternalAsmInstances_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalAsmInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementExternalAsmInstances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementExternalAsmInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalAsmInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.externalAsmInstanceCollection">ExternalAsmInstanceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList">DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList">DataOciDatabaseManagementExternalAsmInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.externalAsmIdInput">ExternalAsmIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.externalAsmId">ExternalAsmId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ExternalAsmInstanceCollection`<sup>Required</sup> <a name="ExternalAsmInstanceCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.externalAsmInstanceCollection"></a>

```go
func ExternalAsmInstanceCollection() DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList">DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.filter"></a>

```go
func Filter() DataOciDatabaseManagementExternalAsmInstancesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList">DataOciDatabaseManagementExternalAsmInstancesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExternalAsmIdInput`<sup>Optional</sup> <a name="ExternalAsmIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.externalAsmIdInput"></a>

```go
func ExternalAsmIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExternalAsmId`<sup>Required</sup> <a name="ExternalAsmId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.externalAsmId"></a>

```go
func ExternalAsmId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstances.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalAsmInstancesConfig <a name="DataOciDatabaseManagementExternalAsmInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasminstances"

&dataocidatabasemanagementexternalasminstances.DataOciDatabaseManagementExternalAsmInstancesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	ExternalAsmId: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_instances#compartment_id DataOciDatabaseManagementExternalAsmInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_instances#display_name DataOciDatabaseManagementExternalAsmInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.externalAsmId">ExternalAsmId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_instances#external_asm_id DataOciDatabaseManagementExternalAsmInstances#external_asm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_instances#id DataOciDatabaseManagementExternalAsmInstances#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_instances#compartment_id DataOciDatabaseManagementExternalAsmInstances#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_instances#display_name DataOciDatabaseManagementExternalAsmInstances#display_name}.

---

##### `ExternalAsmId`<sup>Optional</sup> <a name="ExternalAsmId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.externalAsmId"></a>

```go
ExternalAsmId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_instances#external_asm_id DataOciDatabaseManagementExternalAsmInstances#external_asm_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_instances#filter DataOciDatabaseManagementExternalAsmInstances#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_instances#id DataOciDatabaseManagementExternalAsmInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollection <a name="DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasminstances"

&dataocidatabasemanagementexternalasminstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollection {

}
```


### DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItems <a name="DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasminstances"

&dataocidatabasemanagementexternalasminstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItems {

}
```


### DataOciDatabaseManagementExternalAsmInstancesFilter <a name="DataOciDatabaseManagementExternalAsmInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasminstances"

&dataocidatabasemanagementexternalasminstances.DataOciDatabaseManagementExternalAsmInstancesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_instances#name DataOciDatabaseManagementExternalAsmInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_instances#values DataOciDatabaseManagementExternalAsmInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_instances#regex DataOciDatabaseManagementExternalAsmInstances#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_instances#name DataOciDatabaseManagementExternalAsmInstances#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_instances#values DataOciDatabaseManagementExternalAsmInstances#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_instances#regex DataOciDatabaseManagementExternalAsmInstances#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList <a name="DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasminstances"

dataocidatabasemanagementexternalasminstances.NewDataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference <a name="DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasminstances"

dataocidatabasemanagementexternalasminstances.NewDataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.adrHomeDirectory">AdrHomeDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.componentName">ComponentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.externalAsmId">ExternalAsmId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.externalAsmInstanceId">ExternalAsmInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.externalDbNodeId">ExternalDbNodeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.externalDbSystemId">ExternalDbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItems">DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdrHomeDirectory`<sup>Required</sup> <a name="AdrHomeDirectory" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.adrHomeDirectory"></a>

```go
func AdrHomeDirectory() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComponentName`<sup>Required</sup> <a name="ComponentName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.componentName"></a>

```go
func ComponentName() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExternalAsmId`<sup>Required</sup> <a name="ExternalAsmId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.externalAsmId"></a>

```go
func ExternalAsmId() *string
```

- *Type:* *string

---

##### `ExternalAsmInstanceId`<sup>Required</sup> <a name="ExternalAsmInstanceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.externalAsmInstanceId"></a>

```go
func ExternalAsmInstanceId() *string
```

- *Type:* *string

---

##### `ExternalDbNodeId`<sup>Required</sup> <a name="ExternalDbNodeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.externalDbNodeId"></a>

```go
func ExternalDbNodeId() *string
```

- *Type:* *string

---

##### `ExternalDbSystemId`<sup>Required</sup> <a name="ExternalDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.externalDbSystemId"></a>

```go
func ExternalDbSystemId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItems">DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItems</a>

---


### DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList <a name="DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasminstances"

dataocidatabasemanagementexternalasminstances.NewDataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference <a name="DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasminstances"

dataocidatabasemanagementexternalasminstances.NewDataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList">DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollection">DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList">DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollection">DataOciDatabaseManagementExternalAsmInstancesExternalAsmInstanceCollection</a>

---


### DataOciDatabaseManagementExternalAsmInstancesFilterList <a name="DataOciDatabaseManagementExternalAsmInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasminstances"

dataocidatabasemanagementexternalasminstances.NewDataOciDatabaseManagementExternalAsmInstancesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalAsmInstancesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference <a name="DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasminstances"

dataocidatabasemanagementexternalasminstances.NewDataOciDatabaseManagementExternalAsmInstancesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmInstances.DataOciDatabaseManagementExternalAsmInstancesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



