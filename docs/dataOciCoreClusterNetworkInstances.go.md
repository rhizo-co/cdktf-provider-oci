# `dataOciCoreClusterNetworkInstances` Submodule <a name="`dataOciCoreClusterNetworkInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreClusterNetworkInstances <a name="DataOciCoreClusterNetworkInstances" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network_instances oci_core_cluster_network_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreclusternetworkinstances"

dataocicoreclusternetworkinstances.NewDataOciCoreClusterNetworkInstances(scope Construct, id *string, config DataOciCoreClusterNetworkInstancesConfig) DataOciCoreClusterNetworkInstances
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig">DataOciCoreClusterNetworkInstancesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig">DataOciCoreClusterNetworkInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreClusterNetworkInstances resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreclusternetworkinstances"

dataocicoreclusternetworkinstances.DataOciCoreClusterNetworkInstances_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreclusternetworkinstances"

dataocicoreclusternetworkinstances.DataOciCoreClusterNetworkInstances_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreclusternetworkinstances"

dataocicoreclusternetworkinstances.DataOciCoreClusterNetworkInstances_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreclusternetworkinstances"

dataocicoreclusternetworkinstances.DataOciCoreClusterNetworkInstances_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreClusterNetworkInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreClusterNetworkInstances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreClusterNetworkInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreClusterNetworkInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList">DataOciCoreClusterNetworkInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.instances">Instances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList">DataOciCoreClusterNetworkInstancesInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.clusterNetworkIdInput">ClusterNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.clusterNetworkId">ClusterNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.filter"></a>

```go
func Filter() DataOciCoreClusterNetworkInstancesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList">DataOciCoreClusterNetworkInstancesFilterList</a>

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.instances"></a>

```go
func Instances() DataOciCoreClusterNetworkInstancesInstancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList">DataOciCoreClusterNetworkInstancesInstancesList</a>

---

##### `ClusterNetworkIdInput`<sup>Optional</sup> <a name="ClusterNetworkIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.clusterNetworkIdInput"></a>

```go
func ClusterNetworkIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ClusterNetworkId`<sup>Required</sup> <a name="ClusterNetworkId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.clusterNetworkId"></a>

```go
func ClusterNetworkId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstances.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreClusterNetworkInstancesConfig <a name="DataOciCoreClusterNetworkInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreclusternetworkinstances"

&dataocicoreclusternetworkinstances.DataOciCoreClusterNetworkInstancesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterNetworkId: *string,
	CompartmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.clusterNetworkId">ClusterNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network_instances#cluster_network_id DataOciCoreClusterNetworkInstances#cluster_network_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network_instances#compartment_id DataOciCoreClusterNetworkInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network_instances#display_name DataOciCoreClusterNetworkInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network_instances#id DataOciCoreClusterNetworkInstances#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterNetworkId`<sup>Required</sup> <a name="ClusterNetworkId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.clusterNetworkId"></a>

```go
ClusterNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network_instances#cluster_network_id DataOciCoreClusterNetworkInstances#cluster_network_id}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network_instances#compartment_id DataOciCoreClusterNetworkInstances#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network_instances#display_name DataOciCoreClusterNetworkInstances#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network_instances#filter DataOciCoreClusterNetworkInstances#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network_instances#id DataOciCoreClusterNetworkInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreClusterNetworkInstancesFilter <a name="DataOciCoreClusterNetworkInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreclusternetworkinstances"

&dataocicoreclusternetworkinstances.DataOciCoreClusterNetworkInstancesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network_instances#name DataOciCoreClusterNetworkInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network_instances#values DataOciCoreClusterNetworkInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network_instances#regex DataOciCoreClusterNetworkInstances#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network_instances#name DataOciCoreClusterNetworkInstances#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network_instances#values DataOciCoreClusterNetworkInstances#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_network_instances#regex DataOciCoreClusterNetworkInstances#regex}.

---

### DataOciCoreClusterNetworkInstancesInstances <a name="DataOciCoreClusterNetworkInstancesInstances" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstances.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreclusternetworkinstances"

&dataocicoreclusternetworkinstances.DataOciCoreClusterNetworkInstancesInstances {

}
```


### DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackends <a name="DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackends" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackends"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackends.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreclusternetworkinstances"

&dataocicoreclusternetworkinstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackends {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreClusterNetworkInstancesFilterList <a name="DataOciCoreClusterNetworkInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreclusternetworkinstances"

dataocicoreclusternetworkinstances.NewDataOciCoreClusterNetworkInstancesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreClusterNetworkInstancesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.get"></a>

```go
func Get(index *f64) DataOciCoreClusterNetworkInstancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreClusterNetworkInstancesFilterOutputReference <a name="DataOciCoreClusterNetworkInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreclusternetworkinstances"

dataocicoreclusternetworkinstances.NewDataOciCoreClusterNetworkInstancesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreClusterNetworkInstancesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreClusterNetworkInstancesInstancesList <a name="DataOciCoreClusterNetworkInstancesInstancesList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreclusternetworkinstances"

dataocicoreclusternetworkinstances.NewDataOciCoreClusterNetworkInstancesInstancesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreClusterNetworkInstancesInstancesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.get"></a>

```go
func Get(index *f64) DataOciCoreClusterNetworkInstancesInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList <a name="DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreclusternetworkinstances"

dataocicoreclusternetworkinstances.NewDataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.get"></a>

```go
func Get(index *f64) DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference <a name="DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreclusternetworkinstances"

dataocicoreclusternetworkinstances.NewDataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.property.backendHealthStatus">BackendHealthStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.property.backendName">BackendName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.property.backendSetName">BackendSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackends">DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackends</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackendHealthStatus`<sup>Required</sup> <a name="BackendHealthStatus" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.property.backendHealthStatus"></a>

```go
func BackendHealthStatus() *string
```

- *Type:* *string

---

##### `BackendName`<sup>Required</sup> <a name="BackendName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.property.backendName"></a>

```go
func BackendName() *string
```

- *Type:* *string

---

##### `BackendSetName`<sup>Required</sup> <a name="BackendSetName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.property.backendSetName"></a>

```go
func BackendSetName() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackends
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackends">DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackends</a>

---


### DataOciCoreClusterNetworkInstancesInstancesOutputReference <a name="DataOciCoreClusterNetworkInstancesInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreclusternetworkinstances"

dataocicoreclusternetworkinstances.NewDataOciCoreClusterNetworkInstancesInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreClusterNetworkInstancesInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.faultDomain">FaultDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.instanceConfigurationId">InstanceConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.loadBalancerBackends">LoadBalancerBackends</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList">DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstances">DataOciCoreClusterNetworkInstancesInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.faultDomain"></a>

```go
func FaultDomain() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceConfigurationId`<sup>Required</sup> <a name="InstanceConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.instanceConfigurationId"></a>

```go
func InstanceConfigurationId() *string
```

- *Type:* *string

---

##### `LoadBalancerBackends`<sup>Required</sup> <a name="LoadBalancerBackends" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.loadBalancerBackends"></a>

```go
func LoadBalancerBackends() DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList">DataOciCoreClusterNetworkInstancesInstancesLoadBalancerBackendsList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreClusterNetworkInstancesInstances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworkInstances.DataOciCoreClusterNetworkInstancesInstances">DataOciCoreClusterNetworkInstancesInstances</a>

---



