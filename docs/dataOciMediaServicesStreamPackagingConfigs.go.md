# `dataOciMediaServicesStreamPackagingConfigs` Submodule <a name="`dataOciMediaServicesStreamPackagingConfigs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesStreamPackagingConfigs <a name="DataOciMediaServicesStreamPackagingConfigs" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs oci_media_services_stream_packaging_configs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreampackagingconfigs"

dataocimediaservicesstreampackagingconfigs.NewDataOciMediaServicesStreamPackagingConfigs(scope Construct, id *string, config DataOciMediaServicesStreamPackagingConfigsConfig) DataOciMediaServicesStreamPackagingConfigs
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig">DataOciMediaServicesStreamPackagingConfigsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig">DataOciMediaServicesStreamPackagingConfigsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetStreamPackagingConfigId">ResetStreamPackagingConfigId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetState"></a>

```go
func ResetState()
```

##### `ResetStreamPackagingConfigId` <a name="ResetStreamPackagingConfigId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetStreamPackagingConfigId"></a>

```go
func ResetStreamPackagingConfigId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMediaServicesStreamPackagingConfigs resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreampackagingconfigs"

dataocimediaservicesstreampackagingconfigs.DataOciMediaServicesStreamPackagingConfigs_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreampackagingconfigs"

dataocimediaservicesstreampackagingconfigs.DataOciMediaServicesStreamPackagingConfigs_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreampackagingconfigs"

dataocimediaservicesstreampackagingconfigs.DataOciMediaServicesStreamPackagingConfigs_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreampackagingconfigs"

dataocimediaservicesstreampackagingconfigs.DataOciMediaServicesStreamPackagingConfigs_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciMediaServicesStreamPackagingConfigs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciMediaServicesStreamPackagingConfigs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciMediaServicesStreamPackagingConfigs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesStreamPackagingConfigs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList">DataOciMediaServicesStreamPackagingConfigsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.streamPackagingConfigCollection">StreamPackagingConfigCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.distributionChannelIdInput">DistributionChannelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.streamPackagingConfigIdInput">StreamPackagingConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.distributionChannelId">DistributionChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.streamPackagingConfigId">StreamPackagingConfigId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.filter"></a>

```go
func Filter() DataOciMediaServicesStreamPackagingConfigsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList">DataOciMediaServicesStreamPackagingConfigsFilterList</a>

---

##### `StreamPackagingConfigCollection`<sup>Required</sup> <a name="StreamPackagingConfigCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.streamPackagingConfigCollection"></a>

```go
func StreamPackagingConfigCollection() DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DistributionChannelIdInput`<sup>Optional</sup> <a name="DistributionChannelIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.distributionChannelIdInput"></a>

```go
func DistributionChannelIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `StreamPackagingConfigIdInput`<sup>Optional</sup> <a name="StreamPackagingConfigIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.streamPackagingConfigIdInput"></a>

```go
func StreamPackagingConfigIdInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DistributionChannelId`<sup>Required</sup> <a name="DistributionChannelId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.distributionChannelId"></a>

```go
func DistributionChannelId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StreamPackagingConfigId`<sup>Required</sup> <a name="StreamPackagingConfigId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.streamPackagingConfigId"></a>

```go
func StreamPackagingConfigId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesStreamPackagingConfigsConfig <a name="DataOciMediaServicesStreamPackagingConfigsConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreampackagingconfigs"

&dataocimediaservicesstreampackagingconfigs.DataOciMediaServicesStreamPackagingConfigsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DistributionChannelId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
	StreamPackagingConfigId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.distributionChannelId">DistributionChannelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#distribution_channel_id DataOciMediaServicesStreamPackagingConfigs#distribution_channel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#display_name DataOciMediaServicesStreamPackagingConfigs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#id DataOciMediaServicesStreamPackagingConfigs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#state DataOciMediaServicesStreamPackagingConfigs#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.streamPackagingConfigId">StreamPackagingConfigId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#stream_packaging_config_id DataOciMediaServicesStreamPackagingConfigs#stream_packaging_config_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DistributionChannelId`<sup>Required</sup> <a name="DistributionChannelId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.distributionChannelId"></a>

```go
DistributionChannelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#distribution_channel_id DataOciMediaServicesStreamPackagingConfigs#distribution_channel_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#display_name DataOciMediaServicesStreamPackagingConfigs#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#filter DataOciMediaServicesStreamPackagingConfigs#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#id DataOciMediaServicesStreamPackagingConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#state DataOciMediaServicesStreamPackagingConfigs#state}.

---

##### `StreamPackagingConfigId`<sup>Optional</sup> <a name="StreamPackagingConfigId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.streamPackagingConfigId"></a>

```go
StreamPackagingConfigId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#stream_packaging_config_id DataOciMediaServicesStreamPackagingConfigs#stream_packaging_config_id}.

---

### DataOciMediaServicesStreamPackagingConfigsFilter <a name="DataOciMediaServicesStreamPackagingConfigsFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreampackagingconfigs"

&dataocimediaservicesstreampackagingconfigs.DataOciMediaServicesStreamPackagingConfigsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#name DataOciMediaServicesStreamPackagingConfigs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#values DataOciMediaServicesStreamPackagingConfigs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#regex DataOciMediaServicesStreamPackagingConfigs#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#name DataOciMediaServicesStreamPackagingConfigs#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#values DataOciMediaServicesStreamPackagingConfigs#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#regex DataOciMediaServicesStreamPackagingConfigs#regex}.

---

### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreampackagingconfigs"

&dataocimediaservicesstreampackagingconfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection {

}
```


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreampackagingconfigs"

&dataocimediaservicesstreampackagingconfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems {

}
```


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreampackagingconfigs"

&dataocimediaservicesstreampackagingconfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption {

}
```


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreampackagingconfigs"

&dataocimediaservicesstreampackagingconfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesStreamPackagingConfigsFilterList <a name="DataOciMediaServicesStreamPackagingConfigsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreampackagingconfigs"

dataocimediaservicesstreampackagingconfigs.NewDataOciMediaServicesStreamPackagingConfigsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMediaServicesStreamPackagingConfigsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.get"></a>

```go
func Get(index *f64) DataOciMediaServicesStreamPackagingConfigsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciMediaServicesStreamPackagingConfigsFilterOutputReference <a name="DataOciMediaServicesStreamPackagingConfigsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreampackagingconfigs"

dataocimediaservicesstreampackagingconfigs.NewDataOciMediaServicesStreamPackagingConfigsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMediaServicesStreamPackagingConfigsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreampackagingconfigs"

dataocimediaservicesstreampackagingconfigs.NewDataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.get"></a>

```go
func Get(index *f64) DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreampackagingconfigs"

dataocimediaservicesstreampackagingconfigs.NewDataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption</a>

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreampackagingconfigs"

dataocimediaservicesstreampackagingconfigs.NewDataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreampackagingconfigs"

dataocimediaservicesstreampackagingconfigs.NewDataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.get"></a>

```go
func Get(index *f64) DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreampackagingconfigs"

dataocimediaservicesstreampackagingconfigs.NewDataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```go
func RelatedResourceId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks</a>

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreampackagingconfigs"

dataocimediaservicesstreampackagingconfigs.NewDataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.distributionChannelId">DistributionChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.encryption">Encryption</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.isLockOverride">IsLockOverride</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.segmentTimeInSeconds">SegmentTimeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.streamPackagingFormat">StreamPackagingFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DistributionChannelId`<sup>Required</sup> <a name="DistributionChannelId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.distributionChannelId"></a>

```go
func DistributionChannelId() *string
```

- *Type:* *string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.encryption"></a>

```go
func Encryption() DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.isLockOverride"></a>

```go
func IsLockOverride() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.locks"></a>

```go
func Locks() DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList</a>

---

##### `SegmentTimeInSeconds`<sup>Required</sup> <a name="SegmentTimeInSeconds" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.segmentTimeInSeconds"></a>

```go
func SegmentTimeInSeconds() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StreamPackagingFormat`<sup>Required</sup> <a name="StreamPackagingFormat" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.streamPackagingFormat"></a>

```go
func StreamPackagingFormat() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems</a>

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreampackagingconfigs"

dataocimediaservicesstreampackagingconfigs.NewDataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.get"></a>

```go
func Get(index *f64) DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreampackagingconfigs"

dataocimediaservicesstreampackagingconfigs.NewDataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.items"></a>

```go
func Items() DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection</a>

---



