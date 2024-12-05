# `dataOciArtifactsGenericArtifacts` Submodule <a name="`dataOciArtifactsGenericArtifacts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciArtifactsGenericArtifacts <a name="DataOciArtifactsGenericArtifacts" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts oci_artifacts_generic_artifacts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactsgenericartifacts"

dataociartifactsgenericartifacts.NewDataOciArtifactsGenericArtifacts(scope Construct, id *string, config DataOciArtifactsGenericArtifactsConfig) DataOciArtifactsGenericArtifacts
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig">DataOciArtifactsGenericArtifactsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig">DataOciArtifactsGenericArtifactsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetArtifactPath">ResetArtifactPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetSha256">ResetSha256</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArtifactPath` <a name="ResetArtifactPath" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetArtifactPath"></a>

```go
func ResetArtifactPath()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetId"></a>

```go
func ResetId()
```

##### `ResetSha256` <a name="ResetSha256" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetSha256"></a>

```go
func ResetSha256()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetState"></a>

```go
func ResetState()
```

##### `ResetVersion` <a name="ResetVersion" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciArtifactsGenericArtifacts resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactsgenericartifacts"

dataociartifactsgenericartifacts.DataOciArtifactsGenericArtifacts_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactsgenericartifacts"

dataociartifactsgenericartifacts.DataOciArtifactsGenericArtifacts_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactsgenericartifacts"

dataociartifactsgenericartifacts.DataOciArtifactsGenericArtifacts_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactsgenericartifacts"

dataociartifactsgenericartifacts.DataOciArtifactsGenericArtifacts_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciArtifactsGenericArtifacts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciArtifactsGenericArtifacts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciArtifactsGenericArtifacts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciArtifactsGenericArtifacts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList">DataOciArtifactsGenericArtifactsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.genericArtifactCollection">GenericArtifactCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList">DataOciArtifactsGenericArtifactsGenericArtifactCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.artifactPathInput">ArtifactPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.sha256Input">Sha256Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.artifactPath">ArtifactPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.sha256">Sha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.filter"></a>

```go
func Filter() DataOciArtifactsGenericArtifactsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList">DataOciArtifactsGenericArtifactsFilterList</a>

---

##### `GenericArtifactCollection`<sup>Required</sup> <a name="GenericArtifactCollection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.genericArtifactCollection"></a>

```go
func GenericArtifactCollection() DataOciArtifactsGenericArtifactsGenericArtifactCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList">DataOciArtifactsGenericArtifactsGenericArtifactCollectionList</a>

---

##### `ArtifactPathInput`<sup>Optional</sup> <a name="ArtifactPathInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.artifactPathInput"></a>

```go
func ArtifactPathInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.repositoryIdInput"></a>

```go
func RepositoryIdInput() *string
```

- *Type:* *string

---

##### `Sha256Input`<sup>Optional</sup> <a name="Sha256Input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.sha256Input"></a>

```go
func Sha256Input() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `ArtifactPath`<sup>Required</sup> <a name="ArtifactPath" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.artifactPath"></a>

```go
func ArtifactPath() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.repositoryId"></a>

```go
func RepositoryId() *string
```

- *Type:* *string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.sha256"></a>

```go
func Sha256() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifacts.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciArtifactsGenericArtifactsConfig <a name="DataOciArtifactsGenericArtifactsConfig" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactsgenericartifacts"

&dataociartifactsgenericartifacts.DataOciArtifactsGenericArtifactsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	RepositoryId: *string,
	ArtifactPath: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	Sha256: *string,
	State: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#compartment_id DataOciArtifactsGenericArtifacts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#repository_id DataOciArtifactsGenericArtifacts#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.artifactPath">ArtifactPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#artifact_path DataOciArtifactsGenericArtifacts#artifact_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#display_name DataOciArtifactsGenericArtifacts#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#id DataOciArtifactsGenericArtifacts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.sha256">Sha256</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#sha256 DataOciArtifactsGenericArtifacts#sha256}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#state DataOciArtifactsGenericArtifacts#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#version DataOciArtifactsGenericArtifacts#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#compartment_id DataOciArtifactsGenericArtifacts#compartment_id}.

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.repositoryId"></a>

```go
RepositoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#repository_id DataOciArtifactsGenericArtifacts#repository_id}.

---

##### `ArtifactPath`<sup>Optional</sup> <a name="ArtifactPath" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.artifactPath"></a>

```go
ArtifactPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#artifact_path DataOciArtifactsGenericArtifacts#artifact_path}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#display_name DataOciArtifactsGenericArtifacts#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#filter DataOciArtifactsGenericArtifacts#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#id DataOciArtifactsGenericArtifacts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sha256`<sup>Optional</sup> <a name="Sha256" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.sha256"></a>

```go
Sha256 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#sha256 DataOciArtifactsGenericArtifacts#sha256}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#state DataOciArtifactsGenericArtifacts#state}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#version DataOciArtifactsGenericArtifacts#version}.

---

### DataOciArtifactsGenericArtifactsFilter <a name="DataOciArtifactsGenericArtifactsFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactsgenericartifacts"

&dataociartifactsgenericartifacts.DataOciArtifactsGenericArtifactsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#name DataOciArtifactsGenericArtifacts#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#values DataOciArtifactsGenericArtifacts#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#regex DataOciArtifactsGenericArtifacts#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#name DataOciArtifactsGenericArtifacts#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#values DataOciArtifactsGenericArtifacts#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifacts#regex DataOciArtifactsGenericArtifacts#regex}.

---

### DataOciArtifactsGenericArtifactsGenericArtifactCollection <a name="DataOciArtifactsGenericArtifactsGenericArtifactCollection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactsgenericartifacts"

&dataociartifactsgenericartifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollection {

}
```


### DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems <a name="DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactsgenericartifacts"

&dataociartifactsgenericartifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciArtifactsGenericArtifactsFilterList <a name="DataOciArtifactsGenericArtifactsFilterList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactsgenericartifacts"

dataociartifactsgenericartifacts.NewDataOciArtifactsGenericArtifactsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciArtifactsGenericArtifactsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.get"></a>

```go
func Get(index *f64) DataOciArtifactsGenericArtifactsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciArtifactsGenericArtifactsFilterOutputReference <a name="DataOciArtifactsGenericArtifactsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactsgenericartifacts"

dataociartifactsgenericartifacts.NewDataOciArtifactsGenericArtifactsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciArtifactsGenericArtifactsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList <a name="DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactsgenericartifacts"

dataociartifactsgenericartifacts.NewDataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference <a name="DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactsgenericartifacts"

dataociartifactsgenericartifacts.NewDataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.artifactId">ArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.artifactPath">ArtifactPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.sha256">Sha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.sizeInBytes">SizeInBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems">DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.artifactId"></a>

```go
func ArtifactId() *string
```

- *Type:* *string

---

##### `ArtifactPath`<sup>Required</sup> <a name="ArtifactPath" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.artifactPath"></a>

```go
func ArtifactPath() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.repositoryId"></a>

```go
func RepositoryId() *string
```

- *Type:* *string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.sha256"></a>

```go
func Sha256() *string
```

- *Type:* *string

---

##### `SizeInBytes`<sup>Required</sup> <a name="SizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.sizeInBytes"></a>

```go
func SizeInBytes() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems">DataOciArtifactsGenericArtifactsGenericArtifactCollectionItems</a>

---


### DataOciArtifactsGenericArtifactsGenericArtifactCollectionList <a name="DataOciArtifactsGenericArtifactsGenericArtifactCollectionList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactsgenericartifacts"

dataociartifactsgenericartifacts.NewDataOciArtifactsGenericArtifactsGenericArtifactCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciArtifactsGenericArtifactsGenericArtifactCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.get"></a>

```go
func Get(index *f64) DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference <a name="DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactsgenericartifacts"

dataociartifactsgenericartifacts.NewDataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList">DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollection">DataOciArtifactsGenericArtifactsGenericArtifactCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.items"></a>

```go
func Items() DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList">DataOciArtifactsGenericArtifactsGenericArtifactCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciArtifactsGenericArtifactsGenericArtifactCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifacts.DataOciArtifactsGenericArtifactsGenericArtifactCollection">DataOciArtifactsGenericArtifactsGenericArtifactCollection</a>

---



