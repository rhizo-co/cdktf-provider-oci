# `dataOciMediaServicesStreamCdnConfigs` Submodule <a name="`dataOciMediaServicesStreamCdnConfigs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesStreamCdnConfigs <a name="DataOciMediaServicesStreamCdnConfigs" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs oci_media_services_stream_cdn_configs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamcdnconfigs"

dataocimediaservicesstreamcdnconfigs.NewDataOciMediaServicesStreamCdnConfigs(scope Construct, id *string, config DataOciMediaServicesStreamCdnConfigsConfig) DataOciMediaServicesStreamCdnConfigs
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig">DataOciMediaServicesStreamCdnConfigsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig">DataOciMediaServicesStreamCdnConfigsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMediaServicesStreamCdnConfigs resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamcdnconfigs"

dataocimediaservicesstreamcdnconfigs.DataOciMediaServicesStreamCdnConfigs_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamcdnconfigs"

dataocimediaservicesstreamcdnconfigs.DataOciMediaServicesStreamCdnConfigs_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamcdnconfigs"

dataocimediaservicesstreamcdnconfigs.DataOciMediaServicesStreamCdnConfigs_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamcdnconfigs"

dataocimediaservicesstreamcdnconfigs.DataOciMediaServicesStreamCdnConfigs_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciMediaServicesStreamCdnConfigs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciMediaServicesStreamCdnConfigs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciMediaServicesStreamCdnConfigs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesStreamCdnConfigs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList">DataOciMediaServicesStreamCdnConfigsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.streamCdnConfigCollection">StreamCdnConfigCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.distributionChannelIdInput">DistributionChannelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.distributionChannelId">DistributionChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.filter"></a>

```go
func Filter() DataOciMediaServicesStreamCdnConfigsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList">DataOciMediaServicesStreamCdnConfigsFilterList</a>

---

##### `StreamCdnConfigCollection`<sup>Required</sup> <a name="StreamCdnConfigCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.streamCdnConfigCollection"></a>

```go
func StreamCdnConfigCollection() DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DistributionChannelIdInput`<sup>Optional</sup> <a name="DistributionChannelIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.distributionChannelIdInput"></a>

```go
func DistributionChannelIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DistributionChannelId`<sup>Required</sup> <a name="DistributionChannelId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.distributionChannelId"></a>

```go
func DistributionChannelId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesStreamCdnConfigsConfig <a name="DataOciMediaServicesStreamCdnConfigsConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamcdnconfigs"

&dataocimediaservicesstreamcdnconfigs.DataOciMediaServicesStreamCdnConfigsConfig {
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
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.distributionChannelId">DistributionChannelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#distribution_channel_id DataOciMediaServicesStreamCdnConfigs#distribution_channel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#display_name DataOciMediaServicesStreamCdnConfigs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#id DataOciMediaServicesStreamCdnConfigs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#state DataOciMediaServicesStreamCdnConfigs#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DistributionChannelId`<sup>Required</sup> <a name="DistributionChannelId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.distributionChannelId"></a>

```go
DistributionChannelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#distribution_channel_id DataOciMediaServicesStreamCdnConfigs#distribution_channel_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#display_name DataOciMediaServicesStreamCdnConfigs#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#filter DataOciMediaServicesStreamCdnConfigs#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#id DataOciMediaServicesStreamCdnConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#state DataOciMediaServicesStreamCdnConfigs#state}.

---

### DataOciMediaServicesStreamCdnConfigsFilter <a name="DataOciMediaServicesStreamCdnConfigsFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamcdnconfigs"

&dataocimediaservicesstreamcdnconfigs.DataOciMediaServicesStreamCdnConfigsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#name DataOciMediaServicesStreamCdnConfigs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#values DataOciMediaServicesStreamCdnConfigs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#regex DataOciMediaServicesStreamCdnConfigs#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#name DataOciMediaServicesStreamCdnConfigs#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#values DataOciMediaServicesStreamCdnConfigs#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#regex DataOciMediaServicesStreamCdnConfigs#regex}.

---

### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollection <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamcdnconfigs"

&dataocimediaservicesstreamcdnconfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollection {

}
```


### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItems <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamcdnconfigs"

&dataocimediaservicesstreamcdnconfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItems {

}
```


### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfig <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamcdnconfigs"

&dataocimediaservicesstreamcdnconfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfig {

}
```


### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocks <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamcdnconfigs"

&dataocimediaservicesstreamcdnconfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocks {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesStreamCdnConfigsFilterList <a name="DataOciMediaServicesStreamCdnConfigsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamcdnconfigs"

dataocimediaservicesstreamcdnconfigs.NewDataOciMediaServicesStreamCdnConfigsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMediaServicesStreamCdnConfigsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.get"></a>

```go
func Get(index *f64) DataOciMediaServicesStreamCdnConfigsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciMediaServicesStreamCdnConfigsFilterOutputReference <a name="DataOciMediaServicesStreamCdnConfigsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamcdnconfigs"

dataocimediaservicesstreamcdnconfigs.NewDataOciMediaServicesStreamCdnConfigsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMediaServicesStreamCdnConfigsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamcdnconfigs"

dataocimediaservicesstreamcdnconfigs.NewDataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.get"></a>

```go
func Get(index *f64) DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamcdnconfigs"

dataocimediaservicesstreamcdnconfigs.NewDataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.edgeHostname">EdgeHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.edgePathPrefix">EdgePathPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.edgeTokenKey">EdgeTokenKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.edgeTokenSalt">EdgeTokenSalt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.isEdgeTokenAuth">IsEdgeTokenAuth</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSecretKeyA">OriginAuthSecretKeyA</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSecretKeyB">OriginAuthSecretKeyB</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSecretKeyNonceA">OriginAuthSecretKeyNonceA</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSecretKeyNonceB">OriginAuthSecretKeyNonceB</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSignEncryption">OriginAuthSignEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSignType">OriginAuthSignType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfig">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EdgeHostname`<sup>Required</sup> <a name="EdgeHostname" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.edgeHostname"></a>

```go
func EdgeHostname() *string
```

- *Type:* *string

---

##### `EdgePathPrefix`<sup>Required</sup> <a name="EdgePathPrefix" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.edgePathPrefix"></a>

```go
func EdgePathPrefix() *string
```

- *Type:* *string

---

##### `EdgeTokenKey`<sup>Required</sup> <a name="EdgeTokenKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.edgeTokenKey"></a>

```go
func EdgeTokenKey() *string
```

- *Type:* *string

---

##### `EdgeTokenSalt`<sup>Required</sup> <a name="EdgeTokenSalt" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.edgeTokenSalt"></a>

```go
func EdgeTokenSalt() *string
```

- *Type:* *string

---

##### `IsEdgeTokenAuth`<sup>Required</sup> <a name="IsEdgeTokenAuth" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.isEdgeTokenAuth"></a>

```go
func IsEdgeTokenAuth() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OriginAuthSecretKeyA`<sup>Required</sup> <a name="OriginAuthSecretKeyA" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSecretKeyA"></a>

```go
func OriginAuthSecretKeyA() *string
```

- *Type:* *string

---

##### `OriginAuthSecretKeyB`<sup>Required</sup> <a name="OriginAuthSecretKeyB" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSecretKeyB"></a>

```go
func OriginAuthSecretKeyB() *string
```

- *Type:* *string

---

##### `OriginAuthSecretKeyNonceA`<sup>Required</sup> <a name="OriginAuthSecretKeyNonceA" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSecretKeyNonceA"></a>

```go
func OriginAuthSecretKeyNonceA() *string
```

- *Type:* *string

---

##### `OriginAuthSecretKeyNonceB`<sup>Required</sup> <a name="OriginAuthSecretKeyNonceB" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSecretKeyNonceB"></a>

```go
func OriginAuthSecretKeyNonceB() *string
```

- *Type:* *string

---

##### `OriginAuthSignEncryption`<sup>Required</sup> <a name="OriginAuthSignEncryption" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSignEncryption"></a>

```go
func OriginAuthSignEncryption() *string
```

- *Type:* *string

---

##### `OriginAuthSignType`<sup>Required</sup> <a name="OriginAuthSignType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSignType"></a>

```go
func OriginAuthSignType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfig">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfig</a>

---


### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamcdnconfigs"

dataocimediaservicesstreamcdnconfigs.NewDataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamcdnconfigs"

dataocimediaservicesstreamcdnconfigs.NewDataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.get"></a>

```go
func Get(index *f64) DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamcdnconfigs"

dataocimediaservicesstreamcdnconfigs.NewDataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocks">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```go
func RelatedResourceId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocks">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocks</a>

---


### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamcdnconfigs"

dataocimediaservicesstreamcdnconfigs.NewDataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.distributionChannelId">DistributionChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.isLockOverride">IsLockOverride</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.lifecyleDetails">LifecyleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItems">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.config"></a>

```go
func Config() DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DistributionChannelId`<sup>Required</sup> <a name="DistributionChannelId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.distributionChannelId"></a>

```go
func DistributionChannelId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.isLockOverride"></a>

```go
func IsLockOverride() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecyleDetails`<sup>Required</sup> <a name="LifecyleDetails" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.lifecyleDetails"></a>

```go
func LifecyleDetails() *string
```

- *Type:* *string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.locks"></a>

```go
func Locks() DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItems">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItems</a>

---


### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamcdnconfigs"

dataocimediaservicesstreamcdnconfigs.NewDataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.get"></a>

```go
func Get(index *f64) DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamcdnconfigs"

dataocimediaservicesstreamcdnconfigs.NewDataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollection">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.property.items"></a>

```go
func Items() DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollection">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollection</a>

---



