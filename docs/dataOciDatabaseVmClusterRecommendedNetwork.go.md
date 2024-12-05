# `dataOciDatabaseVmClusterRecommendedNetwork` Submodule <a name="`dataOciDatabaseVmClusterRecommendedNetwork` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseVmClusterRecommendedNetwork <a name="DataOciDatabaseVmClusterRecommendedNetwork" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network oci_database_vm_cluster_recommended_network}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterrecommendednetwork"

dataocidatabasevmclusterrecommendednetwork.NewDataOciDatabaseVmClusterRecommendedNetwork(scope Construct, id *string, config DataOciDatabaseVmClusterRecommendedNetworkConfig) DataOciDatabaseVmClusterRecommendedNetwork
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig">DataOciDatabaseVmClusterRecommendedNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig">DataOciDatabaseVmClusterRecommendedNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDbServers">ResetDbServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDns">ResetDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDrScanListenerPortTcp">ResetDrScanListenerPortTcp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetNtp">ResetNtp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetScanListenerPortTcp">ResetScanListenerPortTcp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetScanListenerPortTcpSsl">ResetScanListenerPortTcpSsl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutNetworks` <a name="PutNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.putNetworks"></a>

```go
func PutNetworks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.putNetworks.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDbServers` <a name="ResetDbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDbServers"></a>

```go
func ResetDbServers()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDns` <a name="ResetDns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDns"></a>

```go
func ResetDns()
```

##### `ResetDrScanListenerPortTcp` <a name="ResetDrScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetDrScanListenerPortTcp"></a>

```go
func ResetDrScanListenerPortTcp()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetId"></a>

```go
func ResetId()
```

##### `ResetNtp` <a name="ResetNtp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetNtp"></a>

```go
func ResetNtp()
```

##### `ResetScanListenerPortTcp` <a name="ResetScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetScanListenerPortTcp"></a>

```go
func ResetScanListenerPortTcp()
```

##### `ResetScanListenerPortTcpSsl` <a name="ResetScanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.resetScanListenerPortTcpSsl"></a>

```go
func ResetScanListenerPortTcpSsl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseVmClusterRecommendedNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterrecommendednetwork"

dataocidatabasevmclusterrecommendednetwork.DataOciDatabaseVmClusterRecommendedNetwork_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterrecommendednetwork"

dataocidatabasevmclusterrecommendednetwork.DataOciDatabaseVmClusterRecommendedNetwork_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterrecommendednetwork"

dataocidatabasevmclusterrecommendednetwork.DataOciDatabaseVmClusterRecommendedNetwork_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterrecommendednetwork"

dataocidatabasevmclusterrecommendednetwork.DataOciDatabaseVmClusterRecommendedNetwork_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseVmClusterRecommendedNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseVmClusterRecommendedNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseVmClusterRecommendedNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseVmClusterRecommendedNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScans">DrScans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList">DataOciDatabaseVmClusterRecommendedNetworkDrScansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.networks">Networks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList">DataOciDatabaseVmClusterRecommendedNetworkNetworksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scans">Scans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList">DataOciDatabaseVmClusterRecommendedNetworkScansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.vmNetworks">VmNetworks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dbServersInput">DbServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dnsInput">DnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScanListenerPortTcpInput">DrScanListenerPortTcpInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.exadataInfrastructureIdInput">ExadataInfrastructureIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.networksInput">NetworksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.ntpInput">NtpInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpInput">ScanListenerPortTcpInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpSslInput">ScanListenerPortTcpSslInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dbServers">DbServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dns">Dns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScanListenerPortTcp">DrScanListenerPortTcp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.ntp">Ntp</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpSsl">ScanListenerPortTcpSsl</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DrScans`<sup>Required</sup> <a name="DrScans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScans"></a>

```go
func DrScans() DataOciDatabaseVmClusterRecommendedNetworkDrScansList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList">DataOciDatabaseVmClusterRecommendedNetworkDrScansList</a>

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.networks"></a>

```go
func Networks() DataOciDatabaseVmClusterRecommendedNetworkNetworksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList">DataOciDatabaseVmClusterRecommendedNetworkNetworksList</a>

---

##### `Scans`<sup>Required</sup> <a name="Scans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scans"></a>

```go
func Scans() DataOciDatabaseVmClusterRecommendedNetworkScansList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList">DataOciDatabaseVmClusterRecommendedNetworkScansList</a>

---

##### `VmNetworks`<sup>Required</sup> <a name="VmNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.vmNetworks"></a>

```go
func VmNetworks() DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DbServersInput`<sup>Optional</sup> <a name="DbServersInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dbServersInput"></a>

```go
func DbServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dnsInput"></a>

```go
func DnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DrScanListenerPortTcpInput`<sup>Optional</sup> <a name="DrScanListenerPortTcpInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScanListenerPortTcpInput"></a>

```go
func DrScanListenerPortTcpInput() *f64
```

- *Type:* *f64

---

##### `ExadataInfrastructureIdInput`<sup>Optional</sup> <a name="ExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.exadataInfrastructureIdInput"></a>

```go
func ExadataInfrastructureIdInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.networksInput"></a>

```go
func NetworksInput() interface{}
```

- *Type:* interface{}

---

##### `NtpInput`<sup>Optional</sup> <a name="NtpInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.ntpInput"></a>

```go
func NtpInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScanListenerPortTcpInput`<sup>Optional</sup> <a name="ScanListenerPortTcpInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpInput"></a>

```go
func ScanListenerPortTcpInput() *f64
```

- *Type:* *f64

---

##### `ScanListenerPortTcpSslInput`<sup>Optional</sup> <a name="ScanListenerPortTcpSslInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpSslInput"></a>

```go
func ScanListenerPortTcpSslInput() *f64
```

- *Type:* *f64

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DbServers`<sup>Required</sup> <a name="DbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dbServers"></a>

```go
func DbServers() *[]*string
```

- *Type:* *[]*string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.dns"></a>

```go
func Dns() *[]*string
```

- *Type:* *[]*string

---

##### `DrScanListenerPortTcp`<sup>Required</sup> <a name="DrScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.drScanListenerPortTcp"></a>

```go
func DrScanListenerPortTcp() *f64
```

- *Type:* *f64

---

##### `ExadataInfrastructureId`<sup>Required</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.exadataInfrastructureId"></a>

```go
func ExadataInfrastructureId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ntp`<sup>Required</sup> <a name="Ntp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.ntp"></a>

```go
func Ntp() *[]*string
```

- *Type:* *[]*string

---

##### `ScanListenerPortTcp`<sup>Required</sup> <a name="ScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcp"></a>

```go
func ScanListenerPortTcp() *f64
```

- *Type:* *f64

---

##### `ScanListenerPortTcpSsl`<sup>Required</sup> <a name="ScanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.scanListenerPortTcpSsl"></a>

```go
func ScanListenerPortTcpSsl() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetwork.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseVmClusterRecommendedNetworkConfig <a name="DataOciDatabaseVmClusterRecommendedNetworkConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterrecommendednetwork"

&dataocidatabasevmclusterrecommendednetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	ExadataInfrastructureId: *string,
	Networks: interface{},
	DbServers: *[]*string,
	DefinedTags: *map[string]*string,
	Dns: *[]*string,
	DrScanListenerPortTcp: *f64,
	FreeformTags: *map[string]*string,
	Id: *string,
	Ntp: *[]*string,
	ScanListenerPortTcp: *f64,
	ScanListenerPortTcpSsl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#compartment_id DataOciDatabaseVmClusterRecommendedNetwork#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#display_name DataOciDatabaseVmClusterRecommendedNetwork#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#exadata_infrastructure_id DataOciDatabaseVmClusterRecommendedNetwork#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.networks">Networks</a></code> | <code>interface{}</code> | networks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dbServers">DbServers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#db_servers DataOciDatabaseVmClusterRecommendedNetwork#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#defined_tags DataOciDatabaseVmClusterRecommendedNetwork#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dns">Dns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dns DataOciDatabaseVmClusterRecommendedNetwork#dns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.drScanListenerPortTcp">DrScanListenerPortTcp</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dr_scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#dr_scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#freeform_tags DataOciDatabaseVmClusterRecommendedNetwork#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#id DataOciDatabaseVmClusterRecommendedNetwork#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.ntp">Ntp</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#ntp DataOciDatabaseVmClusterRecommendedNetwork#ntp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.scanListenerPortTcpSsl">ScanListenerPortTcpSsl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp_ssl DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp_ssl}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#compartment_id DataOciDatabaseVmClusterRecommendedNetwork#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#display_name DataOciDatabaseVmClusterRecommendedNetwork#display_name}.

---

##### `ExadataInfrastructureId`<sup>Required</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.exadataInfrastructureId"></a>

```go
ExadataInfrastructureId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#exadata_infrastructure_id DataOciDatabaseVmClusterRecommendedNetwork#exadata_infrastructure_id}.

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.networks"></a>

```go
Networks interface{}
```

- *Type:* interface{}

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#networks DataOciDatabaseVmClusterRecommendedNetwork#networks}

---

##### `DbServers`<sup>Optional</sup> <a name="DbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dbServers"></a>

```go
DbServers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#db_servers DataOciDatabaseVmClusterRecommendedNetwork#db_servers}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#defined_tags DataOciDatabaseVmClusterRecommendedNetwork#defined_tags}.

---

##### `Dns`<sup>Optional</sup> <a name="Dns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.dns"></a>

```go
Dns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dns DataOciDatabaseVmClusterRecommendedNetwork#dns}.

---

##### `DrScanListenerPortTcp`<sup>Optional</sup> <a name="DrScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.drScanListenerPortTcp"></a>

```go
DrScanListenerPortTcp *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#dr_scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#dr_scan_listener_port_tcp}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#freeform_tags DataOciDatabaseVmClusterRecommendedNetwork#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#id DataOciDatabaseVmClusterRecommendedNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ntp`<sup>Optional</sup> <a name="Ntp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.ntp"></a>

```go
Ntp *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#ntp DataOciDatabaseVmClusterRecommendedNetwork#ntp}.

---

##### `ScanListenerPortTcp`<sup>Optional</sup> <a name="ScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.scanListenerPortTcp"></a>

```go
ScanListenerPortTcp *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp}.

---

##### `ScanListenerPortTcpSsl`<sup>Optional</sup> <a name="ScanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkConfig.property.scanListenerPortTcpSsl"></a>

```go
ScanListenerPortTcpSsl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#scan_listener_port_tcp_ssl DataOciDatabaseVmClusterRecommendedNetwork#scan_listener_port_tcp_ssl}.

---

### DataOciDatabaseVmClusterRecommendedNetworkDrScans <a name="DataOciDatabaseVmClusterRecommendedNetworkDrScans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScans.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterrecommendednetwork"

&dataocidatabasevmclusterrecommendednetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScans {

}
```


### DataOciDatabaseVmClusterRecommendedNetworkNetworks <a name="DataOciDatabaseVmClusterRecommendedNetworkNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterrecommendednetwork"

&dataocidatabasevmclusterrecommendednetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks {
	Cidr: *string,
	Domain: *string,
	Gateway: *string,
	Netmask: *string,
	NetworkType: *string,
	Prefix: *string,
	VlanId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.cidr">Cidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#cidr DataOciDatabaseVmClusterRecommendedNetwork#cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.domain">Domain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#domain DataOciDatabaseVmClusterRecommendedNetwork#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.gateway">Gateway</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#gateway DataOciDatabaseVmClusterRecommendedNetwork#gateway}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.netmask">Netmask</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#netmask DataOciDatabaseVmClusterRecommendedNetwork#netmask}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.networkType">NetworkType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#network_type DataOciDatabaseVmClusterRecommendedNetwork#network_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#prefix DataOciDatabaseVmClusterRecommendedNetwork#prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.vlanId">VlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#vlan_id DataOciDatabaseVmClusterRecommendedNetwork#vlan_id}. |

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.cidr"></a>

```go
Cidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#cidr DataOciDatabaseVmClusterRecommendedNetwork#cidr}.

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#domain DataOciDatabaseVmClusterRecommendedNetwork#domain}.

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.gateway"></a>

```go
Gateway *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#gateway DataOciDatabaseVmClusterRecommendedNetwork#gateway}.

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.netmask"></a>

```go
Netmask *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#netmask DataOciDatabaseVmClusterRecommendedNetwork#netmask}.

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.networkType"></a>

```go
NetworkType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#network_type DataOciDatabaseVmClusterRecommendedNetwork#network_type}.

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#prefix DataOciDatabaseVmClusterRecommendedNetwork#prefix}.

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworks.property.vlanId"></a>

```go
VlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_recommended_network#vlan_id DataOciDatabaseVmClusterRecommendedNetwork#vlan_id}.

---

### DataOciDatabaseVmClusterRecommendedNetworkScans <a name="DataOciDatabaseVmClusterRecommendedNetworkScans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScans.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterrecommendednetwork"

&dataocidatabasevmclusterrecommendednetwork.DataOciDatabaseVmClusterRecommendedNetworkScans {

}
```


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworks <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterrecommendednetwork"

&dataocidatabasevmclusterrecommendednetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworks {

}
```


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterrecommendednetwork"

&dataocidatabasevmclusterrecommendednetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseVmClusterRecommendedNetworkDrScansList <a name="DataOciDatabaseVmClusterRecommendedNetworkDrScansList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterrecommendednetwork"

dataocidatabasevmclusterrecommendednetwork.NewDataOciDatabaseVmClusterRecommendedNetworkDrScansList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseVmClusterRecommendedNetworkDrScansList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.get"></a>

```go
func Get(index *f64) DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference <a name="DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterrecommendednetwork"

dataocidatabasevmclusterrecommendednetwork.NewDataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.ips">Ips</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScans">DataOciDatabaseVmClusterRecommendedNetworkDrScans</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.ips"></a>

```go
func Ips() *[]*string
```

- *Type:* *[]*string

---

##### `ScanListenerPortTcp`<sup>Required</sup> <a name="ScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.scanListenerPortTcp"></a>

```go
func ScanListenerPortTcp() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScansOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseVmClusterRecommendedNetworkDrScans
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkDrScans">DataOciDatabaseVmClusterRecommendedNetworkDrScans</a>

---


### DataOciDatabaseVmClusterRecommendedNetworkNetworksList <a name="DataOciDatabaseVmClusterRecommendedNetworkNetworksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterrecommendednetwork"

dataocidatabasevmclusterrecommendednetwork.NewDataOciDatabaseVmClusterRecommendedNetworkNetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseVmClusterRecommendedNetworkNetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.get"></a>

```go
func Get(index *f64) DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference <a name="DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterrecommendednetwork"

dataocidatabasevmclusterrecommendednetwork.NewDataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.cidrInput">CidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.gatewayInput">GatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.netmaskInput">NetmaskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.networkTypeInput">NetworkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.vlanIdInput">VlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.cidr">Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.gateway">Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.netmask">Netmask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.vlanId">VlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.cidrInput"></a>

```go
func CidrInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.gatewayInput"></a>

```go
func GatewayInput() *string
```

- *Type:* *string

---

##### `NetmaskInput`<sup>Optional</sup> <a name="NetmaskInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.netmaskInput"></a>

```go
func NetmaskInput() *string
```

- *Type:* *string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.networkTypeInput"></a>

```go
func NetworkTypeInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.vlanIdInput"></a>

```go
func VlanIdInput() *string
```

- *Type:* *string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.cidr"></a>

```go
func Cidr() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.gateway"></a>

```go
func Gateway() *string
```

- *Type:* *string

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.netmask"></a>

```go
func Netmask() *string
```

- *Type:* *string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.vlanId"></a>

```go
func VlanId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkNetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseVmClusterRecommendedNetworkScansList <a name="DataOciDatabaseVmClusterRecommendedNetworkScansList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterrecommendednetwork"

dataocidatabasevmclusterrecommendednetwork.NewDataOciDatabaseVmClusterRecommendedNetworkScansList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseVmClusterRecommendedNetworkScansList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.get"></a>

```go
func Get(index *f64) DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference <a name="DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterrecommendednetwork"

dataocidatabasevmclusterrecommendednetwork.NewDataOciDatabaseVmClusterRecommendedNetworkScansOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.ips">Ips</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.scanListenerPortTcpSsl">ScanListenerPortTcpSsl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScans">DataOciDatabaseVmClusterRecommendedNetworkScans</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.ips"></a>

```go
func Ips() *[]*string
```

- *Type:* *[]*string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ScanListenerPortTcp`<sup>Required</sup> <a name="ScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.scanListenerPortTcp"></a>

```go
func ScanListenerPortTcp() *f64
```

- *Type:* *f64

---

##### `ScanListenerPortTcpSsl`<sup>Required</sup> <a name="ScanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.scanListenerPortTcpSsl"></a>

```go
func ScanListenerPortTcpSsl() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScansOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseVmClusterRecommendedNetworkScans
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkScans">DataOciDatabaseVmClusterRecommendedNetworkScans</a>

---


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterrecommendednetwork"

dataocidatabasevmclusterrecommendednetwork.NewDataOciDatabaseVmClusterRecommendedNetworkVmNetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.get"></a>

```go
func Get(index *f64) DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterrecommendednetwork"

dataocidatabasevmclusterrecommendednetwork.NewDataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.get"></a>

```go
func Get(index *f64) DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterrecommendednetwork"

dataocidatabasevmclusterrecommendednetwork.NewDataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.dbServerId">DbServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.vip">Vip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.vipHostname">VipHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbServerId`<sup>Required</sup> <a name="DbServerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.dbServerId"></a>

```go
func DbServerId() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Vip`<sup>Required</sup> <a name="Vip" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.vip"></a>

```go
func Vip() *string
```

- *Type:* *string

---

##### `VipHostname`<sup>Required</sup> <a name="VipHostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.vipHostname"></a>

```go
func VipHostname() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodes</a>

---


### DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference <a name="DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterrecommendednetwork"

dataocidatabasevmclusterrecommendednetwork.NewDataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.gateway">Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.netmask">Netmask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.nodes">Nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.vlanId">VlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworks">DataOciDatabaseVmClusterRecommendedNetworkVmNetworks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.gateway"></a>

```go
func Gateway() *string
```

- *Type:* *string

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.netmask"></a>

```go
func Netmask() *string
```

- *Type:* *string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.nodes"></a>

```go
func Nodes() DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList">DataOciDatabaseVmClusterRecommendedNetworkVmNetworksNodesList</a>

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.vlanId"></a>

```go
func VlanId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseVmClusterRecommendedNetworkVmNetworks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterRecommendedNetwork.DataOciDatabaseVmClusterRecommendedNetworkVmNetworks">DataOciDatabaseVmClusterRecommendedNetworkVmNetworks</a>

---



