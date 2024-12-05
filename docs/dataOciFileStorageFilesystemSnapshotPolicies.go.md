# `dataOciFileStorageFilesystemSnapshotPolicies` Submodule <a name="`dataOciFileStorageFilesystemSnapshotPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFileStorageFilesystemSnapshotPolicies <a name="DataOciFileStorageFilesystemSnapshotPolicies" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies oci_file_storage_filesystem_snapshot_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicies"

dataocifilestoragefilesystemsnapshotpolicies.NewDataOciFileStorageFilesystemSnapshotPolicies(scope Construct, id *string, config DataOciFileStorageFilesystemSnapshotPoliciesConfig) DataOciFileStorageFilesystemSnapshotPolicies
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig">DataOciFileStorageFilesystemSnapshotPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig">DataOciFileStorageFilesystemSnapshotPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFileStorageFilesystemSnapshotPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicies"

dataocifilestoragefilesystemsnapshotpolicies.DataOciFileStorageFilesystemSnapshotPolicies_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicies"

dataocifilestoragefilesystemsnapshotpolicies.DataOciFileStorageFilesystemSnapshotPolicies_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicies"

dataocifilestoragefilesystemsnapshotpolicies.DataOciFileStorageFilesystemSnapshotPolicies_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicies"

dataocifilestoragefilesystemsnapshotpolicies.DataOciFileStorageFilesystemSnapshotPolicies_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciFileStorageFilesystemSnapshotPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciFileStorageFilesystemSnapshotPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciFileStorageFilesystemSnapshotPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFileStorageFilesystemSnapshotPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.filesystemSnapshotPolicies">FilesystemSnapshotPolicies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList">DataOciFileStorageFilesystemSnapshotPoliciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `FilesystemSnapshotPolicies`<sup>Required</sup> <a name="FilesystemSnapshotPolicies" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.filesystemSnapshotPolicies"></a>

```go
func FilesystemSnapshotPolicies() DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.filter"></a>

```go
func Filter() DataOciFileStorageFilesystemSnapshotPoliciesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList">DataOciFileStorageFilesystemSnapshotPoliciesFilterList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPolicies.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFileStorageFilesystemSnapshotPoliciesConfig <a name="DataOciFileStorageFilesystemSnapshotPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicies"

&dataocifilestoragefilesystemsnapshotpolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityDomain: *string,
	CompartmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#availability_domain DataOciFileStorageFilesystemSnapshotPolicies#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#compartment_id DataOciFileStorageFilesystemSnapshotPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#display_name DataOciFileStorageFilesystemSnapshotPolicies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#id DataOciFileStorageFilesystemSnapshotPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#state DataOciFileStorageFilesystemSnapshotPolicies#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#availability_domain DataOciFileStorageFilesystemSnapshotPolicies#availability_domain}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#compartment_id DataOciFileStorageFilesystemSnapshotPolicies#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#display_name DataOciFileStorageFilesystemSnapshotPolicies#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#filter DataOciFileStorageFilesystemSnapshotPolicies#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#id DataOciFileStorageFilesystemSnapshotPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#state DataOciFileStorageFilesystemSnapshotPolicies#state}.

---

### DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPolicies <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPolicies" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPolicies.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicies"

&dataocifilestoragefilesystemsnapshotpolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPolicies {

}
```


### DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocks <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicies"

&dataocifilestoragefilesystemsnapshotpolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocks {

}
```


### DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedules <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedules" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicies"

&dataocifilestoragefilesystemsnapshotpolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedules {

}
```


### DataOciFileStorageFilesystemSnapshotPoliciesFilter <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicies"

&dataocifilestoragefilesystemsnapshotpolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#name DataOciFileStorageFilesystemSnapshotPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#values DataOciFileStorageFilesystemSnapshotPolicies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#regex DataOciFileStorageFilesystemSnapshotPolicies#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#name DataOciFileStorageFilesystemSnapshotPolicies#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#values DataOciFileStorageFilesystemSnapshotPolicies#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policies#regex DataOciFileStorageFilesystemSnapshotPolicies#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicies"

dataocifilestoragefilesystemsnapshotpolicies.NewDataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.get"></a>

```go
func Get(index *f64) DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicies"

dataocifilestoragefilesystemsnapshotpolicies.NewDataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.get"></a>

```go
func Get(index *f64) DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicies"

dataocifilestoragefilesystemsnapshotpolicies.NewDataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocks">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.relatedResourceId"></a>

```go
func RelatedResourceId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocks">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocks</a>

---


### DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicies"

dataocifilestoragefilesystemsnapshotpolicies.NewDataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.isLockOverride">IsLockOverride</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.policyPrefix">PolicyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.schedules">Schedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPolicies">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.isLockOverride"></a>

```go
func IsLockOverride() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.locks"></a>

```go
func Locks() DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesLocksList</a>

---

##### `PolicyPrefix`<sup>Required</sup> <a name="PolicyPrefix" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.policyPrefix"></a>

```go
func PolicyPrefix() *string
```

- *Type:* *string

---

##### `Schedules`<sup>Required</sup> <a name="Schedules" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.schedules"></a>

```go
func Schedules() DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPolicies
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPolicies">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPolicies</a>

---


### DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicies"

dataocifilestoragefilesystemsnapshotpolicies.NewDataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.get"></a>

```go
func Get(index *f64) DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicies"

dataocifilestoragefilesystemsnapshotpolicies.NewDataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.dayOfMonth">DayOfMonth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.month">Month</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.period">Period</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.retentionDurationInSeconds">RetentionDurationInSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.schedulePrefix">SchedulePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.timeScheduleStart">TimeScheduleStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedules">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfMonth`<sup>Required</sup> <a name="DayOfMonth" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.dayOfMonth"></a>

```go
func DayOfMonth() *f64
```

- *Type:* *f64

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.hourOfDay"></a>

```go
func HourOfDay() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.month"></a>

```go
func Month() *string
```

- *Type:* *string

---

##### `Period`<sup>Required</sup> <a name="Period" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.period"></a>

```go
func Period() *string
```

- *Type:* *string

---

##### `RetentionDurationInSeconds`<sup>Required</sup> <a name="RetentionDurationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.retentionDurationInSeconds"></a>

```go
func RetentionDurationInSeconds() *string
```

- *Type:* *string

---

##### `SchedulePrefix`<sup>Required</sup> <a name="SchedulePrefix" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.schedulePrefix"></a>

```go
func SchedulePrefix() *string
```

- *Type:* *string

---

##### `TimeScheduleStart`<sup>Required</sup> <a name="TimeScheduleStart" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.timeScheduleStart"></a>

```go
func TimeScheduleStart() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedules">DataOciFileStorageFilesystemSnapshotPoliciesFilesystemSnapshotPoliciesSchedules</a>

---


### DataOciFileStorageFilesystemSnapshotPoliciesFilterList <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicies"

dataocifilestoragefilesystemsnapshotpolicies.NewDataOciFileStorageFilesystemSnapshotPoliciesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFileStorageFilesystemSnapshotPoliciesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.get"></a>

```go
func Get(index *f64) DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference <a name="DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicies"

dataocifilestoragefilesystemsnapshotpolicies.NewDataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicies.DataOciFileStorageFilesystemSnapshotPoliciesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



