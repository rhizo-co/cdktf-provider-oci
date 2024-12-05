# `dataOciDataSafeMaskingPolicyMaskingSchemas` Submodule <a name="`dataOciDataSafeMaskingPolicyMaskingSchemas` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeMaskingPolicyMaskingSchemas <a name="DataOciDataSafeMaskingPolicyMaskingSchemas" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas oci_data_safe_masking_policy_masking_schemas}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicymaskingschemas"

dataocidatasafemaskingpolicymaskingschemas.NewDataOciDataSafeMaskingPolicyMaskingSchemas(scope Construct, id *string, config DataOciDataSafeMaskingPolicyMaskingSchemasConfig) DataOciDataSafeMaskingPolicyMaskingSchemas
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig">DataOciDataSafeMaskingPolicyMaskingSchemasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig">DataOciDataSafeMaskingPolicyMaskingSchemasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetId"></a>

```go
func ResetId()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetSchemaName"></a>

```go
func ResetSchemaName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyMaskingSchemas resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicymaskingschemas"

dataocidatasafemaskingpolicymaskingschemas.DataOciDataSafeMaskingPolicyMaskingSchemas_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicymaskingschemas"

dataocidatasafemaskingpolicymaskingschemas.DataOciDataSafeMaskingPolicyMaskingSchemas_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicymaskingschemas"

dataocidatasafemaskingpolicymaskingschemas.DataOciDataSafeMaskingPolicyMaskingSchemas_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicymaskingschemas"

dataocidatasafemaskingpolicymaskingschemas.DataOciDataSafeMaskingPolicyMaskingSchemas_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyMaskingSchemas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeMaskingPolicyMaskingSchemas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeMaskingPolicyMaskingSchemas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeMaskingPolicyMaskingSchemas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList">DataOciDataSafeMaskingPolicyMaskingSchemasFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.maskingSchemaCollection">MaskingSchemaCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.maskingPolicyIdInput">MaskingPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.schemaNameInput">SchemaNameInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.maskingPolicyId">MaskingPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.schemaName">SchemaName</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.filter"></a>

```go
func Filter() DataOciDataSafeMaskingPolicyMaskingSchemasFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList">DataOciDataSafeMaskingPolicyMaskingSchemasFilterList</a>

---

##### `MaskingSchemaCollection`<sup>Required</sup> <a name="MaskingSchemaCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.maskingSchemaCollection"></a>

```go
func MaskingSchemaCollection() DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaskingPolicyIdInput`<sup>Optional</sup> <a name="MaskingPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.maskingPolicyIdInput"></a>

```go
func MaskingPolicyIdInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.schemaNameInput"></a>

```go
func SchemaNameInput() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaskingPolicyId`<sup>Required</sup> <a name="MaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.maskingPolicyId"></a>

```go
func MaskingPolicyId() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.schemaName"></a>

```go
func SchemaName() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeMaskingPolicyMaskingSchemasConfig <a name="DataOciDataSafeMaskingPolicyMaskingSchemasConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicymaskingschemas"

&dataocidatasafemaskingpolicymaskingschemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MaskingPolicyId: *string,
	Filter: interface{},
	Id: *string,
	SchemaName: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.maskingPolicyId">MaskingPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#masking_policy_id DataOciDataSafeMaskingPolicyMaskingSchemas#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#id DataOciDataSafeMaskingPolicyMaskingSchemas#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.schemaName">SchemaName</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#schema_name DataOciDataSafeMaskingPolicyMaskingSchemas#schema_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MaskingPolicyId`<sup>Required</sup> <a name="MaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.maskingPolicyId"></a>

```go
MaskingPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#masking_policy_id DataOciDataSafeMaskingPolicyMaskingSchemas#masking_policy_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#filter DataOciDataSafeMaskingPolicyMaskingSchemas#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#id DataOciDataSafeMaskingPolicyMaskingSchemas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.schemaName"></a>

```go
SchemaName *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#schema_name DataOciDataSafeMaskingPolicyMaskingSchemas#schema_name}.

---

### DataOciDataSafeMaskingPolicyMaskingSchemasFilter <a name="DataOciDataSafeMaskingPolicyMaskingSchemasFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicymaskingschemas"

&dataocidatasafemaskingpolicymaskingschemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#name DataOciDataSafeMaskingPolicyMaskingSchemas#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#values DataOciDataSafeMaskingPolicyMaskingSchemas#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#regex DataOciDataSafeMaskingPolicyMaskingSchemas#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#name DataOciDataSafeMaskingPolicyMaskingSchemas#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#values DataOciDataSafeMaskingPolicyMaskingSchemas#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#regex DataOciDataSafeMaskingPolicyMaskingSchemas#regex}.

---

### DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection <a name="DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicymaskingschemas"

&dataocidatasafemaskingpolicymaskingschemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection {

}
```


### DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems <a name="DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicymaskingschemas"

&dataocidatasafemaskingpolicymaskingschemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeMaskingPolicyMaskingSchemasFilterList <a name="DataOciDataSafeMaskingPolicyMaskingSchemasFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicymaskingschemas"

dataocidatasafemaskingpolicymaskingschemas.NewDataOciDataSafeMaskingPolicyMaskingSchemasFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeMaskingPolicyMaskingSchemasFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.get"></a>

```go
func Get(index *f64) DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference <a name="DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicymaskingschemas"

dataocidatasafemaskingpolicymaskingschemas.NewDataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList <a name="DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicymaskingschemas"

dataocidatasafemaskingpolicymaskingschemas.NewDataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference <a name="DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicymaskingschemas"

dataocidatasafemaskingpolicymaskingschemas.NewDataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems</a>

---


### DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList <a name="DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicymaskingschemas"

dataocidatasafemaskingpolicymaskingschemas.NewDataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference <a name="DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingpolicymaskingschemas"

dataocidatasafemaskingpolicymaskingschemas.NewDataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection</a>

---



