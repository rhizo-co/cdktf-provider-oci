# `dataOciLogAnalyticsNamespacePropertiesMetadata` Submodule <a name="`dataOciLogAnalyticsNamespacePropertiesMetadata` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsNamespacePropertiesMetadata <a name="DataOciLogAnalyticsNamespacePropertiesMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata oci_log_analytics_namespace_properties_metadata}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacepropertiesmetadata"

dataociloganalyticsnamespacepropertiesmetadata.NewDataOciLogAnalyticsNamespacePropertiesMetadata(scope Construct, id *string, config DataOciLogAnalyticsNamespacePropertiesMetadataConfig) DataOciLogAnalyticsNamespacePropertiesMetadata
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig">DataOciLogAnalyticsNamespacePropertiesMetadataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig">DataOciLogAnalyticsNamespacePropertiesMetadataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetConstraints">ResetConstraints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetDisplayText">ResetDisplayText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetLevel">ResetLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConstraints` <a name="ResetConstraints" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetConstraints"></a>

```go
func ResetConstraints()
```

##### `ResetDisplayText` <a name="ResetDisplayText" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetDisplayText"></a>

```go
func ResetDisplayText()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetId"></a>

```go
func ResetId()
```

##### `ResetLevel` <a name="ResetLevel" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetLevel"></a>

```go
func ResetLevel()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsNamespacePropertiesMetadata resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacepropertiesmetadata"

dataociloganalyticsnamespacepropertiesmetadata.DataOciLogAnalyticsNamespacePropertiesMetadata_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacepropertiesmetadata"

dataociloganalyticsnamespacepropertiesmetadata.DataOciLogAnalyticsNamespacePropertiesMetadata_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacepropertiesmetadata"

dataociloganalyticsnamespacepropertiesmetadata.DataOciLogAnalyticsNamespacePropertiesMetadata_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacepropertiesmetadata"

dataociloganalyticsnamespacepropertiesmetadata.DataOciLogAnalyticsNamespacePropertiesMetadata_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciLogAnalyticsNamespacePropertiesMetadata resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciLogAnalyticsNamespacePropertiesMetadata to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciLogAnalyticsNamespacePropertiesMetadata that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsNamespacePropertiesMetadata to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList">DataOciLogAnalyticsNamespacePropertiesMetadataFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.propertyMetadataSummaryCollection">PropertyMetadataSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.constraintsInput">ConstraintsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.displayTextInput">DisplayTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.levelInput">LevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.constraints">Constraints</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.displayText">DisplayText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.filter"></a>

```go
func Filter() DataOciLogAnalyticsNamespacePropertiesMetadataFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList">DataOciLogAnalyticsNamespacePropertiesMetadataFilterList</a>

---

##### `PropertyMetadataSummaryCollection`<sup>Required</sup> <a name="PropertyMetadataSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.propertyMetadataSummaryCollection"></a>

```go
func PropertyMetadataSummaryCollection() DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList</a>

---

##### `ConstraintsInput`<sup>Optional</sup> <a name="ConstraintsInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.constraintsInput"></a>

```go
func ConstraintsInput() *string
```

- *Type:* *string

---

##### `DisplayTextInput`<sup>Optional</sup> <a name="DisplayTextInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.displayTextInput"></a>

```go
func DisplayTextInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.levelInput"></a>

```go
func LevelInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Constraints`<sup>Required</sup> <a name="Constraints" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.constraints"></a>

```go
func Constraints() *string
```

- *Type:* *string

---

##### `DisplayText`<sup>Required</sup> <a name="DisplayText" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.displayText"></a>

```go
func DisplayText() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadata.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsNamespacePropertiesMetadataConfig <a name="DataOciLogAnalyticsNamespacePropertiesMetadataConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacepropertiesmetadata"

&dataociloganalyticsnamespacepropertiesmetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Namespace: *string,
	Constraints: *string,
	DisplayText: *string,
	Filter: interface{},
	Id: *string,
	Level: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#namespace DataOciLogAnalyticsNamespacePropertiesMetadata#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.constraints">Constraints</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#constraints DataOciLogAnalyticsNamespacePropertiesMetadata#constraints}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.displayText">DisplayText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#display_text DataOciLogAnalyticsNamespacePropertiesMetadata#display_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#id DataOciLogAnalyticsNamespacePropertiesMetadata#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.level">Level</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#level DataOciLogAnalyticsNamespacePropertiesMetadata#level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#name DataOciLogAnalyticsNamespacePropertiesMetadata#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#namespace DataOciLogAnalyticsNamespacePropertiesMetadata#namespace}.

---

##### `Constraints`<sup>Optional</sup> <a name="Constraints" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.constraints"></a>

```go
Constraints *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#constraints DataOciLogAnalyticsNamespacePropertiesMetadata#constraints}.

---

##### `DisplayText`<sup>Optional</sup> <a name="DisplayText" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.displayText"></a>

```go
DisplayText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#display_text DataOciLogAnalyticsNamespacePropertiesMetadata#display_text}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#filter DataOciLogAnalyticsNamespacePropertiesMetadata#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#id DataOciLogAnalyticsNamespacePropertiesMetadata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Level`<sup>Optional</sup> <a name="Level" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.level"></a>

```go
Level *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#level DataOciLogAnalyticsNamespacePropertiesMetadata#level}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#name DataOciLogAnalyticsNamespacePropertiesMetadata#name}.

---

### DataOciLogAnalyticsNamespacePropertiesMetadataFilter <a name="DataOciLogAnalyticsNamespacePropertiesMetadataFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacepropertiesmetadata"

&dataociloganalyticsnamespacepropertiesmetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#name DataOciLogAnalyticsNamespacePropertiesMetadata#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#values DataOciLogAnalyticsNamespacePropertiesMetadata#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#regex DataOciLogAnalyticsNamespacePropertiesMetadata#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#name DataOciLogAnalyticsNamespacePropertiesMetadata#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#values DataOciLogAnalyticsNamespacePropertiesMetadata#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_properties_metadata#regex DataOciLogAnalyticsNamespacePropertiesMetadata#regex}.

---

### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacepropertiesmetadata"

&dataociloganalyticsnamespacepropertiesmetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection {

}
```


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacepropertiesmetadata"

&dataociloganalyticsnamespacepropertiesmetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems {

}
```


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacepropertiesmetadata"

&dataociloganalyticsnamespacepropertiesmetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsNamespacePropertiesMetadataFilterList <a name="DataOciLogAnalyticsNamespacePropertiesMetadataFilterList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacepropertiesmetadata"

dataociloganalyticsnamespacepropertiesmetadata.NewDataOciLogAnalyticsNamespacePropertiesMetadataFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLogAnalyticsNamespacePropertiesMetadataFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.get"></a>

```go
func Get(index *f64) DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference <a name="DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacepropertiesmetadata"

dataociloganalyticsnamespacepropertiesmetadata.NewDataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacepropertiesmetadata"

dataociloganalyticsnamespacepropertiesmetadata.NewDataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.get"></a>

```go
func Get(index *f64) DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacepropertiesmetadata"

dataociloganalyticsnamespacepropertiesmetadata.NewDataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.constraints">Constraints</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Constraints`<sup>Required</sup> <a name="Constraints" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.constraints"></a>

```go
func Constraints() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevels</a>

---


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacepropertiesmetadata"

dataociloganalyticsnamespacepropertiesmetadata.NewDataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacepropertiesmetadata"

dataociloganalyticsnamespacepropertiesmetadata.NewDataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.levels">Levels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Levels`<sup>Required</sup> <a name="Levels" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.levels"></a>

```go
func Levels() DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsLevelsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItems</a>

---


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacepropertiesmetadata"

dataociloganalyticsnamespacepropertiesmetadata.NewDataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.get"></a>

```go
func Get(index *f64) DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference <a name="DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsnamespacepropertiesmetadata"

dataociloganalyticsnamespacepropertiesmetadata.NewDataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespacePropertiesMetadata.DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection">DataOciLogAnalyticsNamespacePropertiesMetadataPropertyMetadataSummaryCollection</a>

---



