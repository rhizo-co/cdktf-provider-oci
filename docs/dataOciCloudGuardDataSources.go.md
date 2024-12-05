# `dataOciCloudGuardDataSources` Submodule <a name="`dataOciCloudGuardDataSources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardDataSources <a name="DataOciCloudGuardDataSources" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources oci_cloud_guard_data_sources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

dataocicloudguarddatasources.NewDataOciCloudGuardDataSources(scope Construct, id *string, config DataOciCloudGuardDataSourcesConfig) DataOciCloudGuardDataSources
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig">DataOciCloudGuardDataSourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig">DataOciCloudGuardDataSourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetDataSourceFeedProvider">ResetDataSourceFeedProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetLoggingQueryType">ResetLoggingQueryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetDataSourceFeedProvider` <a name="ResetDataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetDataSourceFeedProvider"></a>

```go
func ResetDataSourceFeedProvider()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetId"></a>

```go
func ResetId()
```

##### `ResetLoggingQueryType` <a name="ResetLoggingQueryType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetLoggingQueryType"></a>

```go
func ResetLoggingQueryType()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardDataSources resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

dataocicloudguarddatasources.DataOciCloudGuardDataSources_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

dataocicloudguarddatasources.DataOciCloudGuardDataSources_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

dataocicloudguarddatasources.DataOciCloudGuardDataSources_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

dataocicloudguarddatasources.DataOciCloudGuardDataSources_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCloudGuardDataSources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCloudGuardDataSources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCloudGuardDataSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardDataSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dataSourceCollection">DataSourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList">DataOciCloudGuardDataSourcesDataSourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList">DataOciCloudGuardDataSourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dataSourceFeedProviderInput">DataSourceFeedProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.loggingQueryTypeInput">LoggingQueryTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dataSourceFeedProvider">DataSourceFeedProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.loggingQueryType">LoggingQueryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DataSourceCollection`<sup>Required</sup> <a name="DataSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dataSourceCollection"></a>

```go
func DataSourceCollection() DataOciCloudGuardDataSourcesDataSourceCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList">DataOciCloudGuardDataSourcesDataSourceCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.filter"></a>

```go
func Filter() DataOciCloudGuardDataSourcesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList">DataOciCloudGuardDataSourcesFilterList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `DataSourceFeedProviderInput`<sup>Optional</sup> <a name="DataSourceFeedProviderInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dataSourceFeedProviderInput"></a>

```go
func DataSourceFeedProviderInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoggingQueryTypeInput`<sup>Optional</sup> <a name="LoggingQueryTypeInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.loggingQueryTypeInput"></a>

```go
func LoggingQueryTypeInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `DataSourceFeedProvider`<sup>Required</sup> <a name="DataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dataSourceFeedProvider"></a>

```go
func DataSourceFeedProvider() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoggingQueryType`<sup>Required</sup> <a name="LoggingQueryType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.loggingQueryType"></a>

```go
func LoggingQueryType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardDataSourcesConfig <a name="DataOciCloudGuardDataSourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

&dataocicloudguarddatasources.DataOciCloudGuardDataSourcesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	AccessLevel: *string,
	CompartmentIdInSubtree: interface{},
	DataSourceFeedProvider: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	LoggingQueryType: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#compartment_id DataOciCloudGuardDataSources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#access_level DataOciCloudGuardDataSources#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#compartment_id_in_subtree DataOciCloudGuardDataSources#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.dataSourceFeedProvider">DataSourceFeedProvider</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#data_source_feed_provider DataOciCloudGuardDataSources#data_source_feed_provider}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#display_name DataOciCloudGuardDataSources#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#id DataOciCloudGuardDataSources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.loggingQueryType">LoggingQueryType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#logging_query_type DataOciCloudGuardDataSources#logging_query_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#state DataOciCloudGuardDataSources#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#compartment_id DataOciCloudGuardDataSources#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#access_level DataOciCloudGuardDataSources#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#compartment_id_in_subtree DataOciCloudGuardDataSources#compartment_id_in_subtree}.

---

##### `DataSourceFeedProvider`<sup>Optional</sup> <a name="DataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.dataSourceFeedProvider"></a>

```go
DataSourceFeedProvider *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#data_source_feed_provider DataOciCloudGuardDataSources#data_source_feed_provider}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#display_name DataOciCloudGuardDataSources#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#filter DataOciCloudGuardDataSources#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#id DataOciCloudGuardDataSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoggingQueryType`<sup>Optional</sup> <a name="LoggingQueryType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.loggingQueryType"></a>

```go
LoggingQueryType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#logging_query_type DataOciCloudGuardDataSources#logging_query_type}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#state DataOciCloudGuardDataSources#state}.

---

### DataOciCloudGuardDataSourcesDataSourceCollection <a name="DataOciCloudGuardDataSourcesDataSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

&dataocicloudguarddatasources.DataOciCloudGuardDataSourcesDataSourceCollection {

}
```


### DataOciCloudGuardDataSourcesDataSourceCollectionItems <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

&dataocicloudguarddatasources.DataOciCloudGuardDataSourcesDataSourceCollectionItems {

}
```


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

&dataocicloudguarddatasources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails {

}
```


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

&dataocicloudguarddatasources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails {

}
```


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

&dataocicloudguarddatasources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime {

}
```


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

&dataocicloudguarddatasources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails {

}
```


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

&dataocicloudguarddatasources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo {

}
```


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

&dataocicloudguarddatasources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail {

}
```


### DataOciCloudGuardDataSourcesFilter <a name="DataOciCloudGuardDataSourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

&dataocicloudguarddatasources.DataOciCloudGuardDataSourcesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#name DataOciCloudGuardDataSources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#values DataOciCloudGuardDataSources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#regex DataOciCloudGuardDataSources#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#name DataOciCloudGuardDataSources#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#values DataOciCloudGuardDataSources#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#regex DataOciCloudGuardDataSources#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

dataocicloudguarddatasources.NewDataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

dataocicloudguarddatasources.NewDataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

dataocicloudguarddatasources.NewDataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.keyEntitiesCount">KeyEntitiesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.loggingQueryType">LoggingQueryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyEntitiesCount`<sup>Required</sup> <a name="KeyEntitiesCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.keyEntitiesCount"></a>

```go
func KeyEntitiesCount() *f64
```

- *Type:* *f64

---

##### `LoggingQueryType`<sup>Required</sup> <a name="LoggingQueryType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.loggingQueryType"></a>

```go
func LoggingQueryType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails</a>

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

dataocicloudguarddatasources.NewDataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.additionalEntitiesCount">AdditionalEntitiesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.dataSourceFeedProvider">DataSourceFeedProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.intervalInMinutes">IntervalInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.loggingQueryDetails">LoggingQueryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.loggingQueryType">LoggingQueryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.queryStartTime">QueryStartTime</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.scheduledQueryScopeDetails">ScheduledQueryScopeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalEntitiesCount`<sup>Required</sup> <a name="AdditionalEntitiesCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.additionalEntitiesCount"></a>

```go
func AdditionalEntitiesCount() *f64
```

- *Type:* *f64

---

##### `DataSourceFeedProvider`<sup>Required</sup> <a name="DataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.dataSourceFeedProvider"></a>

```go
func DataSourceFeedProvider() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IntervalInMinutes`<sup>Required</sup> <a name="IntervalInMinutes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.intervalInMinutes"></a>

```go
func IntervalInMinutes() *f64
```

- *Type:* *f64

---

##### `IntervalInSeconds`<sup>Required</sup> <a name="IntervalInSeconds" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.intervalInSeconds"></a>

```go
func IntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `LoggingQueryDetails`<sup>Required</sup> <a name="LoggingQueryDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.loggingQueryDetails"></a>

```go
func LoggingQueryDetails() DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList</a>

---

##### `LoggingQueryType`<sup>Required</sup> <a name="LoggingQueryType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.loggingQueryType"></a>

```go
func LoggingQueryType() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `QueryStartTime`<sup>Required</sup> <a name="QueryStartTime" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.queryStartTime"></a>

```go
func QueryStartTime() DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList</a>

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `ScheduledQueryScopeDetails`<sup>Required</sup> <a name="ScheduledQueryScopeDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.scheduledQueryScopeDetails"></a>

```go
func ScheduledQueryScopeDetails() DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList</a>

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails</a>

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

dataocicloudguarddatasources.NewDataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

dataocicloudguarddatasources.NewDataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.queryStartTime">QueryStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.startPolicyType">StartPolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueryStartTime`<sup>Required</sup> <a name="QueryStartTime" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.queryStartTime"></a>

```go
func QueryStartTime() *string
```

- *Type:* *string

---

##### `StartPolicyType`<sup>Required</sup> <a name="StartPolicyType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.startPolicyType"></a>

```go
func StartPolicyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime</a>

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

dataocicloudguarddatasources.NewDataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

dataocicloudguarddatasources.NewDataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceIds">ResourceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResourceIds`<sup>Required</sup> <a name="ResourceIds" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceIds"></a>

```go
func ResourceIds() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails</a>

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

dataocicloudguarddatasources.NewDataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

dataocicloudguarddatasources.NewDataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.detectorRecipeId">DetectorRecipeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.detectorRuleId">DetectorRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DetectorRecipeId`<sup>Required</sup> <a name="DetectorRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.detectorRecipeId"></a>

```go
func DetectorRecipeId() *string
```

- *Type:* *string

---

##### `DetectorRuleId`<sup>Required</sup> <a name="DetectorRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.detectorRuleId"></a>

```go
func DetectorRuleId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo</a>

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

dataocicloudguarddatasources.NewDataOciCloudGuardDataSourcesDataSourceCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDataSourcesDataSourceCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

dataocicloudguarddatasources.NewDataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.dataSourceDetails">DataSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.dataSourceDetectorMappingInfo">DataSourceDetectorMappingInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.dataSourceFeedProvider">DataSourceFeedProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.regionStatusDetail">RegionStatusDetail</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItems">DataOciCloudGuardDataSourcesDataSourceCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DataSourceDetails`<sup>Required</sup> <a name="DataSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.dataSourceDetails"></a>

```go
func DataSourceDetails() DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList</a>

---

##### `DataSourceDetectorMappingInfo`<sup>Required</sup> <a name="DataSourceDetectorMappingInfo" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.dataSourceDetectorMappingInfo"></a>

```go
func DataSourceDetectorMappingInfo() DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList</a>

---

##### `DataSourceFeedProvider`<sup>Required</sup> <a name="DataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.dataSourceFeedProvider"></a>

```go
func DataSourceFeedProvider() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RegionStatusDetail`<sup>Required</sup> <a name="RegionStatusDetail" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.regionStatusDetail"></a>

```go
func RegionStatusDetail() DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDataSourcesDataSourceCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItems">DataOciCloudGuardDataSourcesDataSourceCollectionItems</a>

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

dataocicloudguarddatasources.NewDataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

dataocicloudguarddatasources.NewDataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail">DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail">DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail</a>

---


### DataOciCloudGuardDataSourcesDataSourceCollectionList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

dataocicloudguarddatasources.NewDataOciCloudGuardDataSourcesDataSourceCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDataSourcesDataSourceCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

dataocicloudguarddatasources.NewDataOciCloudGuardDataSourcesDataSourceCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollection">DataOciCloudGuardDataSourcesDataSourceCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.items"></a>

```go
func Items() DataOciCloudGuardDataSourcesDataSourceCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDataSourcesDataSourceCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollection">DataOciCloudGuardDataSourcesDataSourceCollection</a>

---


### DataOciCloudGuardDataSourcesFilterList <a name="DataOciCloudGuardDataSourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

dataocicloudguarddatasources.NewDataOciCloudGuardDataSourcesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDataSourcesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDataSourcesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCloudGuardDataSourcesFilterOutputReference <a name="DataOciCloudGuardDataSourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddatasources"

dataocicloudguarddatasources.NewDataOciCloudGuardDataSourcesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDataSourcesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



