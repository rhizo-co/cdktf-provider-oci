# `dataOciDatabaseManagementExternalAsmDiskGroups` Submodule <a name="`dataOciDatabaseManagementExternalAsmDiskGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalAsmDiskGroups <a name="DataOciDatabaseManagementExternalAsmDiskGroups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups oci_database_management_external_asm_disk_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmdiskgroups"

dataocidatabasemanagementexternalasmdiskgroups.NewDataOciDatabaseManagementExternalAsmDiskGroups(scope Construct, id *string, config DataOciDatabaseManagementExternalAsmDiskGroupsConfig) DataOciDatabaseManagementExternalAsmDiskGroups
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig">DataOciDatabaseManagementExternalAsmDiskGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig">DataOciDatabaseManagementExternalAsmDiskGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetOpcNamedCredentialId">ResetOpcNamedCredentialId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetId"></a>

```go
func ResetId()
```

##### `ResetOpcNamedCredentialId` <a name="ResetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetOpcNamedCredentialId"></a>

```go
func ResetOpcNamedCredentialId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalAsmDiskGroups resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmdiskgroups"

dataocidatabasemanagementexternalasmdiskgroups.DataOciDatabaseManagementExternalAsmDiskGroups_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmdiskgroups"

dataocidatabasemanagementexternalasmdiskgroups.DataOciDatabaseManagementExternalAsmDiskGroups_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmdiskgroups"

dataocidatabasemanagementexternalasmdiskgroups.DataOciDatabaseManagementExternalAsmDiskGroups_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmdiskgroups"

dataocidatabasemanagementexternalasmdiskgroups.DataOciDatabaseManagementExternalAsmDiskGroups_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalAsmDiskGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementExternalAsmDiskGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementExternalAsmDiskGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalAsmDiskGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmDiskGroupCollection">ExternalAsmDiskGroupCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList">DataOciDatabaseManagementExternalAsmDiskGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmIdInput">ExternalAsmIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.opcNamedCredentialIdInput">OpcNamedCredentialIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmId">ExternalAsmId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ExternalAsmDiskGroupCollection`<sup>Required</sup> <a name="ExternalAsmDiskGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmDiskGroupCollection"></a>

```go
func ExternalAsmDiskGroupCollection() DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.filter"></a>

```go
func Filter() DataOciDatabaseManagementExternalAsmDiskGroupsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList">DataOciDatabaseManagementExternalAsmDiskGroupsFilterList</a>

---

##### `ExternalAsmIdInput`<sup>Optional</sup> <a name="ExternalAsmIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmIdInput"></a>

```go
func ExternalAsmIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OpcNamedCredentialIdInput`<sup>Optional</sup> <a name="OpcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.opcNamedCredentialIdInput"></a>

```go
func OpcNamedCredentialIdInput() *string
```

- *Type:* *string

---

##### `ExternalAsmId`<sup>Required</sup> <a name="ExternalAsmId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmId"></a>

```go
func ExternalAsmId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OpcNamedCredentialId`<sup>Required</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.opcNamedCredentialId"></a>

```go
func OpcNamedCredentialId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalAsmDiskGroupsConfig <a name="DataOciDatabaseManagementExternalAsmDiskGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmdiskgroups"

&dataocidatabasemanagementexternalasmdiskgroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExternalAsmId: *string,
	Filter: interface{},
	Id: *string,
	OpcNamedCredentialId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.externalAsmId">ExternalAsmId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#external_asm_id DataOciDatabaseManagementExternalAsmDiskGroups#external_asm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#id DataOciDatabaseManagementExternalAsmDiskGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#opc_named_credential_id DataOciDatabaseManagementExternalAsmDiskGroups#opc_named_credential_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExternalAsmId`<sup>Required</sup> <a name="ExternalAsmId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.externalAsmId"></a>

```go
ExternalAsmId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#external_asm_id DataOciDatabaseManagementExternalAsmDiskGroups#external_asm_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#filter DataOciDatabaseManagementExternalAsmDiskGroups#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#id DataOciDatabaseManagementExternalAsmDiskGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OpcNamedCredentialId`<sup>Optional</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.opcNamedCredentialId"></a>

```go
OpcNamedCredentialId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#opc_named_credential_id DataOciDatabaseManagementExternalAsmDiskGroups#opc_named_credential_id}.

---

### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmdiskgroups"

&dataocidatabasemanagementexternalasmdiskgroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection {

}
```


### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmdiskgroups"

&dataocidatabasemanagementexternalasmdiskgroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems {

}
```


### DataOciDatabaseManagementExternalAsmDiskGroupsFilter <a name="DataOciDatabaseManagementExternalAsmDiskGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmdiskgroups"

&dataocidatabasemanagementexternalasmdiskgroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#name DataOciDatabaseManagementExternalAsmDiskGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#values DataOciDatabaseManagementExternalAsmDiskGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#regex DataOciDatabaseManagementExternalAsmDiskGroups#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#name DataOciDatabaseManagementExternalAsmDiskGroups#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#values DataOciDatabaseManagementExternalAsmDiskGroups#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#regex DataOciDatabaseManagementExternalAsmDiskGroups#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmdiskgroups"

dataocidatabasemanagementexternalasmdiskgroups.NewDataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmdiskgroups"

dataocidatabasemanagementexternalasmdiskgroups.NewDataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.databases">Databases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.dismountingInstanceCount">DismountingInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.isSparse">IsSparse</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.mountingInstanceCount">MountingInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.redundancyType">RedundancyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.totalSizeInMbs">TotalSizeInMbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.usedPercent">UsedPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.usedSizeInMbs">UsedSizeInMbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Databases`<sup>Required</sup> <a name="Databases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.databases"></a>

```go
func Databases() *[]*string
```

- *Type:* *[]*string

---

##### `DismountingInstanceCount`<sup>Required</sup> <a name="DismountingInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.dismountingInstanceCount"></a>

```go
func DismountingInstanceCount() *f64
```

- *Type:* *f64

---

##### `IsSparse`<sup>Required</sup> <a name="IsSparse" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.isSparse"></a>

```go
func IsSparse() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MountingInstanceCount`<sup>Required</sup> <a name="MountingInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.mountingInstanceCount"></a>

```go
func MountingInstanceCount() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RedundancyType`<sup>Required</sup> <a name="RedundancyType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.redundancyType"></a>

```go
func RedundancyType() *string
```

- *Type:* *string

---

##### `TotalSizeInMbs`<sup>Required</sup> <a name="TotalSizeInMbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.totalSizeInMbs"></a>

```go
func TotalSizeInMbs() *string
```

- *Type:* *string

---

##### `UsedPercent`<sup>Required</sup> <a name="UsedPercent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.usedPercent"></a>

```go
func UsedPercent() *f64
```

- *Type:* *f64

---

##### `UsedSizeInMbs`<sup>Required</sup> <a name="UsedSizeInMbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.usedSizeInMbs"></a>

```go
func UsedSizeInMbs() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems</a>

---


### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmdiskgroups"

dataocidatabasemanagementexternalasmdiskgroups.NewDataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmdiskgroups"

dataocidatabasemanagementexternalasmdiskgroups.NewDataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection</a>

---


### DataOciDatabaseManagementExternalAsmDiskGroupsFilterList <a name="DataOciDatabaseManagementExternalAsmDiskGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmdiskgroups"

dataocidatabasemanagementexternalasmdiskgroups.NewDataOciDatabaseManagementExternalAsmDiskGroupsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalAsmDiskGroupsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference <a name="DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalasmdiskgroups"

dataocidatabasemanagementexternalasmdiskgroups.NewDataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



