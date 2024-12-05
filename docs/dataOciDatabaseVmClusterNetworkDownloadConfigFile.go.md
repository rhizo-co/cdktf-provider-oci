# `dataOciDatabaseVmClusterNetworkDownloadConfigFile` Submodule <a name="`dataOciDatabaseVmClusterNetworkDownloadConfigFile` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseVmClusterNetworkDownloadConfigFile <a name="DataOciDatabaseVmClusterNetworkDownloadConfigFile" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file oci_database_vm_cluster_network_download_config_file}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworkdownloadconfigfile"

dataocidatabasevmclusternetworkdownloadconfigfile.NewDataOciDatabaseVmClusterNetworkDownloadConfigFile(scope Construct, id *string, config DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig) DataOciDatabaseVmClusterNetworkDownloadConfigFile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig">DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig">DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.resetBase64EncodeContent">ResetBase64EncodeContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBase64EncodeContent` <a name="ResetBase64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.resetBase64EncodeContent"></a>

```go
func ResetBase64EncodeContent()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseVmClusterNetworkDownloadConfigFile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworkdownloadconfigfile"

dataocidatabasevmclusternetworkdownloadconfigfile.DataOciDatabaseVmClusterNetworkDownloadConfigFile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworkdownloadconfigfile"

dataocidatabasevmclusternetworkdownloadconfigfile.DataOciDatabaseVmClusterNetworkDownloadConfigFile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworkdownloadconfigfile"

dataocidatabasevmclusternetworkdownloadconfigfile.DataOciDatabaseVmClusterNetworkDownloadConfigFile_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworkdownloadconfigfile"

dataocidatabasevmclusternetworkdownloadconfigfile.DataOciDatabaseVmClusterNetworkDownloadConfigFile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseVmClusterNetworkDownloadConfigFile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseVmClusterNetworkDownloadConfigFile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseVmClusterNetworkDownloadConfigFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseVmClusterNetworkDownloadConfigFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.base64EncodeContentInput">Base64EncodeContentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.exadataInfrastructureIdInput">ExadataInfrastructureIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.vmClusterNetworkIdInput">VmClusterNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.base64EncodeContent">Base64EncodeContent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.vmClusterNetworkId">VmClusterNetworkId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Base64EncodeContentInput`<sup>Optional</sup> <a name="Base64EncodeContentInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.base64EncodeContentInput"></a>

```go
func Base64EncodeContentInput() interface{}
```

- *Type:* interface{}

---

##### `ExadataInfrastructureIdInput`<sup>Optional</sup> <a name="ExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.exadataInfrastructureIdInput"></a>

```go
func ExadataInfrastructureIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `VmClusterNetworkIdInput`<sup>Optional</sup> <a name="VmClusterNetworkIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.vmClusterNetworkIdInput"></a>

```go
func VmClusterNetworkIdInput() *string
```

- *Type:* *string

---

##### `Base64EncodeContent`<sup>Required</sup> <a name="Base64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.base64EncodeContent"></a>

```go
func Base64EncodeContent() interface{}
```

- *Type:* interface{}

---

##### `ExadataInfrastructureId`<sup>Required</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.exadataInfrastructureId"></a>

```go
func ExadataInfrastructureId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `VmClusterNetworkId`<sup>Required</sup> <a name="VmClusterNetworkId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.vmClusterNetworkId"></a>

```go
func VmClusterNetworkId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig <a name="DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworkdownloadconfigfile"

&dataocidatabasevmclusternetworkdownloadconfigfile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExadataInfrastructureId: *string,
	VmClusterNetworkId: *string,
	Base64EncodeContent: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file#exadata_infrastructure_id DataOciDatabaseVmClusterNetworkDownloadConfigFile#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.vmClusterNetworkId">VmClusterNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file#vm_cluster_network_id DataOciDatabaseVmClusterNetworkDownloadConfigFile#vm_cluster_network_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.base64EncodeContent">Base64EncodeContent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file#base64_encode_content DataOciDatabaseVmClusterNetworkDownloadConfigFile#base64_encode_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file#id DataOciDatabaseVmClusterNetworkDownloadConfigFile#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExadataInfrastructureId`<sup>Required</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.exadataInfrastructureId"></a>

```go
ExadataInfrastructureId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file#exadata_infrastructure_id DataOciDatabaseVmClusterNetworkDownloadConfigFile#exadata_infrastructure_id}.

---

##### `VmClusterNetworkId`<sup>Required</sup> <a name="VmClusterNetworkId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.vmClusterNetworkId"></a>

```go
VmClusterNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file#vm_cluster_network_id DataOciDatabaseVmClusterNetworkDownloadConfigFile#vm_cluster_network_id}.

---

##### `Base64EncodeContent`<sup>Optional</sup> <a name="Base64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.base64EncodeContent"></a>

```go
Base64EncodeContent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file#base64_encode_content DataOciDatabaseVmClusterNetworkDownloadConfigFile#base64_encode_content}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworkDownloadConfigFile.DataOciDatabaseVmClusterNetworkDownloadConfigFileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_network_download_config_file#id DataOciDatabaseVmClusterNetworkDownloadConfigFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



