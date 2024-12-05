# `dataOciMediaServicesMediaAssetDistributionChannelAttachment` Submodule <a name="`dataOciMediaServicesMediaAssetDistributionChannelAttachment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesMediaAssetDistributionChannelAttachment <a name="DataOciMediaServicesMediaAssetDistributionChannelAttachment" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment oci_media_services_media_asset_distribution_channel_attachment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesmediaassetdistributionchannelattachment"

dataocimediaservicesmediaassetdistributionchannelattachment.NewDataOciMediaServicesMediaAssetDistributionChannelAttachment(scope Construct, id *string, config DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig) DataOciMediaServicesMediaAssetDistributionChannelAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig">DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig">DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.putLocks">PutLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.resetIsLockOverride">ResetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.resetLocks">ResetLocks</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutLocks` <a name="PutLocks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.putLocks"></a>

```go
func PutLocks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.putLocks.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.resetId"></a>

```go
func ResetId()
```

##### `ResetIsLockOverride` <a name="ResetIsLockOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.resetIsLockOverride"></a>

```go
func ResetIsLockOverride()
```

##### `ResetLocks` <a name="ResetLocks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.resetLocks"></a>

```go
func ResetLocks()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMediaServicesMediaAssetDistributionChannelAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesmediaassetdistributionchannelattachment"

dataocimediaservicesmediaassetdistributionchannelattachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesmediaassetdistributionchannelattachment"

dataocimediaservicesmediaassetdistributionchannelattachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesmediaassetdistributionchannelattachment"

dataocimediaservicesmediaassetdistributionchannelattachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesmediaassetdistributionchannelattachment"

dataocimediaservicesmediaassetdistributionchannelattachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciMediaServicesMediaAssetDistributionChannelAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciMediaServicesMediaAssetDistributionChannelAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciMediaServicesMediaAssetDistributionChannelAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesMediaAssetDistributionChannelAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList">DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.mediaWorkflowJobId">MediaWorkflowJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.metadataRef">MetadataRef</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.distributionChannelIdInput">DistributionChannelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.isLockOverrideInput">IsLockOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.locksInput">LocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.mediaAssetIdInput">MediaAssetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.distributionChannelId">DistributionChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.isLockOverride">IsLockOverride</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.mediaAssetId">MediaAssetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.locks"></a>

```go
func Locks() DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList">DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList</a>

---

##### `MediaWorkflowJobId`<sup>Required</sup> <a name="MediaWorkflowJobId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.mediaWorkflowJobId"></a>

```go
func MediaWorkflowJobId() *string
```

- *Type:* *string

---

##### `MetadataRef`<sup>Required</sup> <a name="MetadataRef" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.metadataRef"></a>

```go
func MetadataRef() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `DistributionChannelIdInput`<sup>Optional</sup> <a name="DistributionChannelIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.distributionChannelIdInput"></a>

```go
func DistributionChannelIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsLockOverrideInput`<sup>Optional</sup> <a name="IsLockOverrideInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.isLockOverrideInput"></a>

```go
func IsLockOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `LocksInput`<sup>Optional</sup> <a name="LocksInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.locksInput"></a>

```go
func LocksInput() interface{}
```

- *Type:* interface{}

---

##### `MediaAssetIdInput`<sup>Optional</sup> <a name="MediaAssetIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.mediaAssetIdInput"></a>

```go
func MediaAssetIdInput() *string
```

- *Type:* *string

---

##### `DistributionChannelId`<sup>Required</sup> <a name="DistributionChannelId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.distributionChannelId"></a>

```go
func DistributionChannelId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.isLockOverride"></a>

```go
func IsLockOverride() interface{}
```

- *Type:* interface{}

---

##### `MediaAssetId`<sup>Required</sup> <a name="MediaAssetId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.mediaAssetId"></a>

```go
func MediaAssetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig <a name="DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesmediaassetdistributionchannelattachment"

&dataocimediaservicesmediaassetdistributionchannelattachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DistributionChannelId: *string,
	MediaAssetId: *string,
	Id: *string,
	IsLockOverride: interface{},
	Locks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.distributionChannelId">DistributionChannelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#distribution_channel_id DataOciMediaServicesMediaAssetDistributionChannelAttachment#distribution_channel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.mediaAssetId">MediaAssetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#media_asset_id DataOciMediaServicesMediaAssetDistributionChannelAttachment#media_asset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#id DataOciMediaServicesMediaAssetDistributionChannelAttachment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.isLockOverride">IsLockOverride</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#is_lock_override DataOciMediaServicesMediaAssetDistributionChannelAttachment#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.locks">Locks</a></code> | <code>interface{}</code> | locks block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DistributionChannelId`<sup>Required</sup> <a name="DistributionChannelId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.distributionChannelId"></a>

```go
DistributionChannelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#distribution_channel_id DataOciMediaServicesMediaAssetDistributionChannelAttachment#distribution_channel_id}.

---

##### `MediaAssetId`<sup>Required</sup> <a name="MediaAssetId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.mediaAssetId"></a>

```go
MediaAssetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#media_asset_id DataOciMediaServicesMediaAssetDistributionChannelAttachment#media_asset_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#id DataOciMediaServicesMediaAssetDistributionChannelAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsLockOverride`<sup>Optional</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.isLockOverride"></a>

```go
IsLockOverride interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#is_lock_override DataOciMediaServicesMediaAssetDistributionChannelAttachment#is_lock_override}.

---

##### `Locks`<sup>Optional</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentConfig.property.locks"></a>

```go
Locks interface{}
```

- *Type:* interface{}

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#locks DataOciMediaServicesMediaAssetDistributionChannelAttachment#locks}

---

### DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks <a name="DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesmediaassetdistributionchannelattachment"

&dataocimediaservicesmediaassetdistributionchannelattachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks {
	Message: *string,
	RelatedResourceId: *string,
	TimeCreated: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks.property.message">Message</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#message DataOciMediaServicesMediaAssetDistributionChannelAttachment#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#related_resource_id DataOciMediaServicesMediaAssetDistributionChannelAttachment#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#time_created DataOciMediaServicesMediaAssetDistributionChannelAttachment#time_created}. |

---

##### `Message`<sup>Optional</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks.property.message"></a>

```go
Message *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#message DataOciMediaServicesMediaAssetDistributionChannelAttachment#message}.

---

##### `RelatedResourceId`<sup>Optional</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks.property.relatedResourceId"></a>

```go
RelatedResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#related_resource_id DataOciMediaServicesMediaAssetDistributionChannelAttachment#related_resource_id}.

---

##### `TimeCreated`<sup>Optional</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocks.property.timeCreated"></a>

```go
TimeCreated *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_asset_distribution_channel_attachment#time_created DataOciMediaServicesMediaAssetDistributionChannelAttachment#time_created}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList <a name="DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesmediaassetdistributionchannelattachment"

dataocimediaservicesmediaassetdistributionchannelattachment.NewDataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.get"></a>

```go
func Get(index *f64) DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference <a name="DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesmediaassetdistributionchannelattachment"

dataocimediaservicesmediaassetdistributionchannelattachment.NewDataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.resetRelatedResourceId">ResetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.resetTimeCreated">ResetTimeCreated</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.resetMessage"></a>

```go
func ResetMessage()
```

##### `ResetRelatedResourceId` <a name="ResetRelatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.resetRelatedResourceId"></a>

```go
func ResetRelatedResourceId()
```

##### `ResetTimeCreated` <a name="ResetTimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.resetTimeCreated"></a>

```go
func ResetTimeCreated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.relatedResourceIdInput">RelatedResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.timeCreatedInput">TimeCreatedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `RelatedResourceIdInput`<sup>Optional</sup> <a name="RelatedResourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.relatedResourceIdInput"></a>

```go
func RelatedResourceIdInput() *string
```

- *Type:* *string

---

##### `TimeCreatedInput`<sup>Optional</sup> <a name="TimeCreatedInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.timeCreatedInput"></a>

```go
func TimeCreatedInput() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.relatedResourceId"></a>

```go
func RelatedResourceId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaAssetDistributionChannelAttachment.DataOciMediaServicesMediaAssetDistributionChannelAttachmentLocksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



