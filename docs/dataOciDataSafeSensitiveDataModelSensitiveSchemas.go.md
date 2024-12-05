# `dataOciDataSafeSensitiveDataModelSensitiveSchemas` Submodule <a name="`dataOciDataSafeSensitiveDataModelSensitiveSchemas` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSensitiveDataModelSensitiveSchemas <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemas" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas oci_data_safe_sensitive_data_model_sensitive_schemas}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelsensitiveschemas"

dataocidatasafesensitivedatamodelsensitiveschemas.NewDataOciDataSafeSensitiveDataModelSensitiveSchemas(scope Construct, id *string, config DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig) DataOciDataSafeSensitiveDataModelSensitiveSchemas
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig">DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig">DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetId"></a>

```go
func ResetId()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetSchemaName"></a>

```go
func ResetSchemaName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelSensitiveSchemas resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelsensitiveschemas"

dataocidatasafesensitivedatamodelsensitiveschemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelsensitiveschemas"

dataocidatasafesensitivedatamodelsensitiveschemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelsensitiveschemas"

dataocidatasafesensitivedatamodelsensitiveschemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelsensitiveschemas"

dataocidatasafesensitivedatamodelsensitiveschemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelSensitiveSchemas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeSensitiveDataModelSensitiveSchemas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeSensitiveDataModelSensitiveSchemas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSensitiveDataModelSensitiveSchemas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList">DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.sensitiveSchemaCollection">SensitiveSchemaCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.schemaNameInput">SchemaNameInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.sensitiveDataModelIdInput">SensitiveDataModelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.schemaName">SchemaName</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.filter"></a>

```go
func Filter() DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList">DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList</a>

---

##### `SensitiveSchemaCollection`<sup>Required</sup> <a name="SensitiveSchemaCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.sensitiveSchemaCollection"></a>

```go
func SensitiveSchemaCollection() DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.schemaNameInput"></a>

```go
func SchemaNameInput() *[]*string
```

- *Type:* *[]*string

---

##### `SensitiveDataModelIdInput`<sup>Optional</sup> <a name="SensitiveDataModelIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.sensitiveDataModelIdInput"></a>

```go
func SensitiveDataModelIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.schemaName"></a>

```go
func SchemaName() *[]*string
```

- *Type:* *[]*string

---

##### `SensitiveDataModelId`<sup>Required</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.sensitiveDataModelId"></a>

```go
func SensitiveDataModelId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelsensitiveschemas"

&dataocidatasafesensitivedatamodelsensitiveschemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SensitiveDataModelId: *string,
	Filter: interface{},
	Id: *string,
	SchemaName: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#sensitive_data_model_id DataOciDataSafeSensitiveDataModelSensitiveSchemas#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#id DataOciDataSafeSensitiveDataModelSensitiveSchemas#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.schemaName">SchemaName</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#schema_name DataOciDataSafeSensitiveDataModelSensitiveSchemas#schema_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SensitiveDataModelId`<sup>Required</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.sensitiveDataModelId"></a>

```go
SensitiveDataModelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#sensitive_data_model_id DataOciDataSafeSensitiveDataModelSensitiveSchemas#sensitive_data_model_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#filter DataOciDataSafeSensitiveDataModelSensitiveSchemas#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#id DataOciDataSafeSensitiveDataModelSensitiveSchemas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.schemaName"></a>

```go
SchemaName *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#schema_name DataOciDataSafeSensitiveDataModelSensitiveSchemas#schema_name}.

---

### DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelsensitiveschemas"

&dataocidatasafesensitivedatamodelsensitiveschemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#name DataOciDataSafeSensitiveDataModelSensitiveSchemas#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#values DataOciDataSafeSensitiveDataModelSensitiveSchemas#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#regex DataOciDataSafeSensitiveDataModelSensitiveSchemas#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#name DataOciDataSafeSensitiveDataModelSensitiveSchemas#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#values DataOciDataSafeSensitiveDataModelSensitiveSchemas#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#regex DataOciDataSafeSensitiveDataModelSensitiveSchemas#regex}.

---

### DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelsensitiveschemas"

&dataocidatasafesensitivedatamodelsensitiveschemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection {

}
```


### DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelsensitiveschemas"

&dataocidatasafesensitivedatamodelsensitiveschemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelsensitiveschemas"

dataocidatasafesensitivedatamodelsensitiveschemas.NewDataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelsensitiveschemas"

dataocidatasafesensitivedatamodelsensitiveschemas.NewDataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelsensitiveschemas"

dataocidatasafesensitivedatamodelsensitiveschemas.NewDataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelsensitiveschemas"

dataocidatasafesensitivedatamodelsensitiveschemas.NewDataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems</a>

---


### DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelsensitiveschemas"

dataocidatasafesensitivedatamodelsensitiveschemas.NewDataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelsensitiveschemas"

dataocidatasafesensitivedatamodelsensitiveschemas.NewDataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection</a>

---



