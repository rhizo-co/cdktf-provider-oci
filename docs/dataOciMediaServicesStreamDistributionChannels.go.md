# `dataOciMediaServicesStreamDistributionChannels` Submodule <a name="`dataOciMediaServicesStreamDistributionChannels` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesStreamDistributionChannels <a name="DataOciMediaServicesStreamDistributionChannels" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels oci_media_services_stream_distribution_channels}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannels"

dataocimediaservicesstreamdistributionchannels.NewDataOciMediaServicesStreamDistributionChannels(scope Construct, id *string, config DataOciMediaServicesStreamDistributionChannelsConfig) DataOciMediaServicesStreamDistributionChannels
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig">DataOciMediaServicesStreamDistributionChannelsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig">DataOciMediaServicesStreamDistributionChannelsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMediaServicesStreamDistributionChannels resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannels"

dataocimediaservicesstreamdistributionchannels.DataOciMediaServicesStreamDistributionChannels_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannels"

dataocimediaservicesstreamdistributionchannels.DataOciMediaServicesStreamDistributionChannels_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannels"

dataocimediaservicesstreamdistributionchannels.DataOciMediaServicesStreamDistributionChannels_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannels"

dataocimediaservicesstreamdistributionchannels.DataOciMediaServicesStreamDistributionChannels_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciMediaServicesStreamDistributionChannels resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciMediaServicesStreamDistributionChannels to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciMediaServicesStreamDistributionChannels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesStreamDistributionChannels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList">DataOciMediaServicesStreamDistributionChannelsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.streamDistributionChannelCollection">StreamDistributionChannelCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.filter"></a>

```go
func Filter() DataOciMediaServicesStreamDistributionChannelsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList">DataOciMediaServicesStreamDistributionChannelsFilterList</a>

---

##### `StreamDistributionChannelCollection`<sup>Required</sup> <a name="StreamDistributionChannelCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.streamDistributionChannelCollection"></a>

```go
func StreamDistributionChannelCollection() DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesStreamDistributionChannelsConfig <a name="DataOciMediaServicesStreamDistributionChannelsConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannels"

&dataocimediaservicesstreamdistributionchannels.DataOciMediaServicesStreamDistributionChannelsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#compartment_id DataOciMediaServicesStreamDistributionChannels#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#display_name DataOciMediaServicesStreamDistributionChannels#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#id DataOciMediaServicesStreamDistributionChannels#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#state DataOciMediaServicesStreamDistributionChannels#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#compartment_id DataOciMediaServicesStreamDistributionChannels#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#display_name DataOciMediaServicesStreamDistributionChannels#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#filter DataOciMediaServicesStreamDistributionChannels#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#id DataOciMediaServicesStreamDistributionChannels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#state DataOciMediaServicesStreamDistributionChannels#state}.

---

### DataOciMediaServicesStreamDistributionChannelsFilter <a name="DataOciMediaServicesStreamDistributionChannelsFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannels"

&dataocimediaservicesstreamdistributionchannels.DataOciMediaServicesStreamDistributionChannelsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#name DataOciMediaServicesStreamDistributionChannels#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#values DataOciMediaServicesStreamDistributionChannels#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#regex DataOciMediaServicesStreamDistributionChannels#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#name DataOciMediaServicesStreamDistributionChannels#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#values DataOciMediaServicesStreamDistributionChannels#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#regex DataOciMediaServicesStreamDistributionChannels#regex}.

---

### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannels"

&dataocimediaservicesstreamdistributionchannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection {

}
```


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannels"

&dataocimediaservicesstreamdistributionchannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems {

}
```


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannels"

&dataocimediaservicesstreamdistributionchannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesStreamDistributionChannelsFilterList <a name="DataOciMediaServicesStreamDistributionChannelsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannels"

dataocimediaservicesstreamdistributionchannels.NewDataOciMediaServicesStreamDistributionChannelsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMediaServicesStreamDistributionChannelsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.get"></a>

```go
func Get(index *f64) DataOciMediaServicesStreamDistributionChannelsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciMediaServicesStreamDistributionChannelsFilterOutputReference <a name="DataOciMediaServicesStreamDistributionChannelsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannels"

dataocimediaservicesstreamdistributionchannels.NewDataOciMediaServicesStreamDistributionChannelsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMediaServicesStreamDistributionChannelsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannels"

dataocimediaservicesstreamdistributionchannels.NewDataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannels"

dataocimediaservicesstreamdistributionchannels.NewDataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.get"></a>

```go
func Get(index *f64) DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannels"

dataocimediaservicesstreamdistributionchannels.NewDataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```go
func RelatedResourceId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks</a>

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannels"

dataocimediaservicesstreamdistributionchannels.NewDataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.isLockOverride">IsLockOverride</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.isLockOverride"></a>

```go
func IsLockOverride() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.locks"></a>

```go
func Locks() DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems</a>

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannels"

dataocimediaservicesstreamdistributionchannels.NewDataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.get"></a>

```go
func Get(index *f64) DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannels"

dataocimediaservicesstreamdistributionchannels.NewDataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.items"></a>

```go
func Items() DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection</a>

---



