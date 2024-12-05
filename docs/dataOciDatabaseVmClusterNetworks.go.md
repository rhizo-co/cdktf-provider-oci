# `dataOciDatabaseVmClusterNetworks` Submodule <a name="`dataOciDatabaseVmClusterNetworks` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseVmClusterNetworks <a name="DataOciDatabaseVmClusterNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks oci_database_vm_cluster_networks}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

dataocidatabasevmclusternetworks.NewDataOciDatabaseVmClusterNetworks(scope Construct, id *string, config DataOciDatabaseVmClusterNetworksConfig) DataOciDatabaseVmClusterNetworks
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig">DataOciDatabaseVmClusterNetworksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig">DataOciDatabaseVmClusterNetworksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseVmClusterNetworks resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

dataocidatabasevmclusternetworks.DataOciDatabaseVmClusterNetworks_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

dataocidatabasevmclusternetworks.DataOciDatabaseVmClusterNetworks_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

dataocidatabasevmclusternetworks.DataOciDatabaseVmClusterNetworks_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

dataocidatabasevmclusternetworks.DataOciDatabaseVmClusterNetworks_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseVmClusterNetworks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseVmClusterNetworks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseVmClusterNetworks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseVmClusterNetworks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList">DataOciDatabaseVmClusterNetworksFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.vmClusterNetworks">VmClusterNetworks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList">DataOciDatabaseVmClusterNetworksVmClusterNetworksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.exadataInfrastructureIdInput">ExadataInfrastructureIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.filter"></a>

```go
func Filter() DataOciDatabaseVmClusterNetworksFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList">DataOciDatabaseVmClusterNetworksFilterList</a>

---

##### `VmClusterNetworks`<sup>Required</sup> <a name="VmClusterNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.vmClusterNetworks"></a>

```go
func VmClusterNetworks() DataOciDatabaseVmClusterNetworksVmClusterNetworksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList">DataOciDatabaseVmClusterNetworksVmClusterNetworksList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExadataInfrastructureIdInput`<sup>Optional</sup> <a name="ExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.exadataInfrastructureIdInput"></a>

```go
func ExadataInfrastructureIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExadataInfrastructureId`<sup>Required</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.exadataInfrastructureId"></a>

```go
func ExadataInfrastructureId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworks.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseVmClusterNetworksConfig <a name="DataOciDatabaseVmClusterNetworksConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

&dataocidatabasevmclusternetworks.DataOciDatabaseVmClusterNetworksConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	ExadataInfrastructureId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#compartment_id DataOciDatabaseVmClusterNetworks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#exadata_infrastructure_id DataOciDatabaseVmClusterNetworks#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#display_name DataOciDatabaseVmClusterNetworks#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#id DataOciDatabaseVmClusterNetworks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#state DataOciDatabaseVmClusterNetworks#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#compartment_id DataOciDatabaseVmClusterNetworks#compartment_id}.

---

##### `ExadataInfrastructureId`<sup>Required</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.exadataInfrastructureId"></a>

```go
ExadataInfrastructureId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#exadata_infrastructure_id DataOciDatabaseVmClusterNetworks#exadata_infrastructure_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#display_name DataOciDatabaseVmClusterNetworks#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#filter DataOciDatabaseVmClusterNetworks#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#id DataOciDatabaseVmClusterNetworks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#state DataOciDatabaseVmClusterNetworks#state}.

---

### DataOciDatabaseVmClusterNetworksFilter <a name="DataOciDatabaseVmClusterNetworksFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

&dataocidatabasevmclusternetworks.DataOciDatabaseVmClusterNetworksFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#name DataOciDatabaseVmClusterNetworks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#values DataOciDatabaseVmClusterNetworks#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#regex DataOciDatabaseVmClusterNetworks#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#name DataOciDatabaseVmClusterNetworks#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#values DataOciDatabaseVmClusterNetworks#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_networks#regex DataOciDatabaseVmClusterNetworks#regex}.

---

### DataOciDatabaseVmClusterNetworksVmClusterNetworks <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

&dataocidatabasevmclusternetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworks {

}
```


### DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScans <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScans.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

&dataocidatabasevmclusternetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScans {

}
```


### DataOciDatabaseVmClusterNetworksVmClusterNetworksScans <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksScans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScans.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

&dataocidatabasevmclusternetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScans {

}
```


### DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworks <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

&dataocidatabasevmclusternetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworks {

}
```


### DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodes <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

&dataocidatabasevmclusternetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodes {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseVmClusterNetworksFilterList <a name="DataOciDatabaseVmClusterNetworksFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

dataocidatabasevmclusternetworks.NewDataOciDatabaseVmClusterNetworksFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseVmClusterNetworksFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseVmClusterNetworksFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseVmClusterNetworksFilterOutputReference <a name="DataOciDatabaseVmClusterNetworksFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

dataocidatabasevmclusternetworks.NewDataOciDatabaseVmClusterNetworksFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseVmClusterNetworksFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

dataocidatabasevmclusternetworks.NewDataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.get"></a>

```go
func Get(index *f64) DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

dataocidatabasevmclusternetworks.NewDataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.ips">Ips</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScans">DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScans</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.ips"></a>

```go
func Ips() *[]*string
```

- *Type:* *[]*string

---

##### `ScanListenerPortTcp`<sup>Required</sup> <a name="ScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.scanListenerPortTcp"></a>

```go
func ScanListenerPortTcp() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScans
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScans">DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScans</a>

---


### DataOciDatabaseVmClusterNetworksVmClusterNetworksList <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

dataocidatabasevmclusternetworks.NewDataOciDatabaseVmClusterNetworksVmClusterNetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseVmClusterNetworksVmClusterNetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.get"></a>

```go
func Get(index *f64) DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

dataocidatabasevmclusternetworks.NewDataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.dns">Dns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.drScans">DrScans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList">DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.ntp">Ntp</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.scans">Scans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList">DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.validateVmClusterNetwork">ValidateVmClusterNetwork</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.vmClusterId">VmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.vmNetworks">VmNetworks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList">DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworks">DataOciDatabaseVmClusterNetworksVmClusterNetworks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.dns"></a>

```go
func Dns() *[]*string
```

- *Type:* *[]*string

---

##### `DrScans`<sup>Required</sup> <a name="DrScans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.drScans"></a>

```go
func DrScans() DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList">DataOciDatabaseVmClusterNetworksVmClusterNetworksDrScansList</a>

---

##### `ExadataInfrastructureId`<sup>Required</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.exadataInfrastructureId"></a>

```go
func ExadataInfrastructureId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Ntp`<sup>Required</sup> <a name="Ntp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.ntp"></a>

```go
func Ntp() *[]*string
```

- *Type:* *[]*string

---

##### `Scans`<sup>Required</sup> <a name="Scans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.scans"></a>

```go
func Scans() DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList">DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `ValidateVmClusterNetwork`<sup>Required</sup> <a name="ValidateVmClusterNetwork" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.validateVmClusterNetwork"></a>

```go
func ValidateVmClusterNetwork() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.vmClusterId"></a>

```go
func VmClusterId() *string
```

- *Type:* *string

---

##### `VmNetworks`<sup>Required</sup> <a name="VmNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.vmNetworks"></a>

```go
func VmNetworks() DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList">DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseVmClusterNetworksVmClusterNetworks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworks">DataOciDatabaseVmClusterNetworksVmClusterNetworks</a>

---


### DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

dataocidatabasevmclusternetworks.NewDataOciDatabaseVmClusterNetworksVmClusterNetworksScansList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.get"></a>

```go
func Get(index *f64) DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

dataocidatabasevmclusternetworks.NewDataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.ips">Ips</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.scanListenerPortTcpSsl">ScanListenerPortTcpSsl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScans">DataOciDatabaseVmClusterNetworksVmClusterNetworksScans</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.ips"></a>

```go
func Ips() *[]*string
```

- *Type:* *[]*string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ScanListenerPortTcp`<sup>Required</sup> <a name="ScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.scanListenerPortTcp"></a>

```go
func ScanListenerPortTcp() *f64
```

- *Type:* *f64

---

##### `ScanListenerPortTcpSsl`<sup>Required</sup> <a name="ScanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.scanListenerPortTcpSsl"></a>

```go
func ScanListenerPortTcpSsl() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScansOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseVmClusterNetworksVmClusterNetworksScans
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksScans">DataOciDatabaseVmClusterNetworksVmClusterNetworksScans</a>

---


### DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

dataocidatabasevmclusternetworks.NewDataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.get"></a>

```go
func Get(index *f64) DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

dataocidatabasevmclusternetworks.NewDataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.get"></a>

```go
func Get(index *f64) DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

dataocidatabasevmclusternetworks.NewDataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.dbServerId">DbServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.vip">Vip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.vipHostname">VipHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodes">DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbServerId`<sup>Required</sup> <a name="DbServerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.dbServerId"></a>

```go
func DbServerId() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Vip`<sup>Required</sup> <a name="Vip" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.vip"></a>

```go
func Vip() *string
```

- *Type:* *string

---

##### `VipHostname`<sup>Required</sup> <a name="VipHostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.vipHostname"></a>

```go
func VipHostname() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodes">DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodes</a>

---


### DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference <a name="DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusternetworks"

dataocidatabasevmclusternetworks.NewDataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.gateway">Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.netmask">Netmask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.nodes">Nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList">DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.vlanId">VlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworks">DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.gateway"></a>

```go
func Gateway() *string
```

- *Type:* *string

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.netmask"></a>

```go
func Netmask() *string
```

- *Type:* *string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.nodes"></a>

```go
func Nodes() DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList">DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksNodesList</a>

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.vlanId"></a>

```go
func VlanId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterNetworks.DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworks">DataOciDatabaseVmClusterNetworksVmClusterNetworksVmNetworks</a>

---



