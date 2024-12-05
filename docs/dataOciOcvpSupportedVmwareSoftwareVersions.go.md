# `dataOciOcvpSupportedVmwareSoftwareVersions` Submodule <a name="`dataOciOcvpSupportedVmwareSoftwareVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOcvpSupportedVmwareSoftwareVersions <a name="DataOciOcvpSupportedVmwareSoftwareVersions" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions oci_ocvp_supported_vmware_software_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedvmwaresoftwareversions"

dataociocvpsupportedvmwaresoftwareversions.NewDataOciOcvpSupportedVmwareSoftwareVersions(scope Construct, id *string, config DataOciOcvpSupportedVmwareSoftwareVersionsConfig) DataOciOcvpSupportedVmwareSoftwareVersions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig">DataOciOcvpSupportedVmwareSoftwareVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig">DataOciOcvpSupportedVmwareSoftwareVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetHostShapeName">ResetHostShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetVersionToUpgrade">ResetVersionToUpgrade</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetHostShapeName` <a name="ResetHostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetHostShapeName"></a>

```go
func ResetHostShapeName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetId"></a>

```go
func ResetId()
```

##### `ResetVersion` <a name="ResetVersion" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetVersion"></a>

```go
func ResetVersion()
```

##### `ResetVersionToUpgrade` <a name="ResetVersionToUpgrade" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetVersionToUpgrade"></a>

```go
func ResetVersionToUpgrade()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOcvpSupportedVmwareSoftwareVersions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedvmwaresoftwareversions"

dataociocvpsupportedvmwaresoftwareversions.DataOciOcvpSupportedVmwareSoftwareVersions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedvmwaresoftwareversions"

dataociocvpsupportedvmwaresoftwareversions.DataOciOcvpSupportedVmwareSoftwareVersions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedvmwaresoftwareversions"

dataociocvpsupportedvmwaresoftwareversions.DataOciOcvpSupportedVmwareSoftwareVersions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedvmwaresoftwareversions"

dataociocvpsupportedvmwaresoftwareversions.DataOciOcvpSupportedVmwareSoftwareVersions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOcvpSupportedVmwareSoftwareVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOcvpSupportedVmwareSoftwareVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOcvpSupportedVmwareSoftwareVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOcvpSupportedVmwareSoftwareVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList">DataOciOcvpSupportedVmwareSoftwareVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList">DataOciOcvpSupportedVmwareSoftwareVersionsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.hostShapeNameInput">HostShapeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionToUpgradeInput">VersionToUpgradeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.hostShapeName">HostShapeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionToUpgrade">VersionToUpgrade</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.filter"></a>

```go
func Filter() DataOciOcvpSupportedVmwareSoftwareVersionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList">DataOciOcvpSupportedVmwareSoftwareVersionsFilterList</a>

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.items"></a>

```go
func Items() DataOciOcvpSupportedVmwareSoftwareVersionsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList">DataOciOcvpSupportedVmwareSoftwareVersionsItemsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `HostShapeNameInput`<sup>Optional</sup> <a name="HostShapeNameInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.hostShapeNameInput"></a>

```go
func HostShapeNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `VersionToUpgradeInput`<sup>Optional</sup> <a name="VersionToUpgradeInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionToUpgradeInput"></a>

```go
func VersionToUpgradeInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `HostShapeName`<sup>Required</sup> <a name="HostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.hostShapeName"></a>

```go
func HostShapeName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `VersionToUpgrade`<sup>Required</sup> <a name="VersionToUpgrade" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionToUpgrade"></a>

```go
func VersionToUpgrade() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOcvpSupportedVmwareSoftwareVersionsConfig <a name="DataOciOcvpSupportedVmwareSoftwareVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedvmwaresoftwareversions"

&dataociocvpsupportedvmwaresoftwareversions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Filter: interface{},
	HostShapeName: *string,
	Id: *string,
	Version: *string,
	VersionToUpgrade: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#compartment_id DataOciOcvpSupportedVmwareSoftwareVersions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.hostShapeName">HostShapeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#host_shape_name DataOciOcvpSupportedVmwareSoftwareVersions#host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#id DataOciOcvpSupportedVmwareSoftwareVersions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#version DataOciOcvpSupportedVmwareSoftwareVersions#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.versionToUpgrade">VersionToUpgrade</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#version_to_upgrade DataOciOcvpSupportedVmwareSoftwareVersions#version_to_upgrade}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#compartment_id DataOciOcvpSupportedVmwareSoftwareVersions#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#filter DataOciOcvpSupportedVmwareSoftwareVersions#filter}

---

##### `HostShapeName`<sup>Optional</sup> <a name="HostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.hostShapeName"></a>

```go
HostShapeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#host_shape_name DataOciOcvpSupportedVmwareSoftwareVersions#host_shape_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#id DataOciOcvpSupportedVmwareSoftwareVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#version DataOciOcvpSupportedVmwareSoftwareVersions#version}.

---

##### `VersionToUpgrade`<sup>Optional</sup> <a name="VersionToUpgrade" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.versionToUpgrade"></a>

```go
VersionToUpgrade *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#version_to_upgrade DataOciOcvpSupportedVmwareSoftwareVersions#version_to_upgrade}.

---

### DataOciOcvpSupportedVmwareSoftwareVersionsFilter <a name="DataOciOcvpSupportedVmwareSoftwareVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedvmwaresoftwareversions"

&dataociocvpsupportedvmwaresoftwareversions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#name DataOciOcvpSupportedVmwareSoftwareVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#values DataOciOcvpSupportedVmwareSoftwareVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#regex DataOciOcvpSupportedVmwareSoftwareVersions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#name DataOciOcvpSupportedVmwareSoftwareVersions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#values DataOciOcvpSupportedVmwareSoftwareVersions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#regex DataOciOcvpSupportedVmwareSoftwareVersions#regex}.

---

### DataOciOcvpSupportedVmwareSoftwareVersionsItems <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItems" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedvmwaresoftwareversions"

&dataociocvpsupportedvmwaresoftwareversions.DataOciOcvpSupportedVmwareSoftwareVersionsItems {

}
```


### DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedvmwaresoftwareversions"

&dataociocvpsupportedvmwaresoftwareversions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOcvpSupportedVmwareSoftwareVersionsFilterList <a name="DataOciOcvpSupportedVmwareSoftwareVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedvmwaresoftwareversions"

dataociocvpsupportedvmwaresoftwareversions.NewDataOciOcvpSupportedVmwareSoftwareVersionsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOcvpSupportedVmwareSoftwareVersionsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.get"></a>

```go
func Get(index *f64) DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference <a name="DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedvmwaresoftwareversions"

dataociocvpsupportedvmwaresoftwareversions.NewDataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedvmwaresoftwareversions"

dataociocvpsupportedvmwaresoftwareversions.NewDataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.get"></a>

```go
func Get(index *f64) DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedvmwaresoftwareversions"

dataociocvpsupportedvmwaresoftwareversions.NewDataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.supportedHostShapeNames">SupportedHostShapeNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions">DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `SupportedHostShapeNames`<sup>Required</sup> <a name="SupportedHostShapeNames" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.supportedHostShapeNames"></a>

```go
func SupportedHostShapeNames() *[]*string
```

- *Type:* *[]*string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions">DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions</a>

---


### DataOciOcvpSupportedVmwareSoftwareVersionsItemsList <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItemsList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedvmwaresoftwareversions"

dataociocvpsupportedvmwaresoftwareversions.NewDataOciOcvpSupportedVmwareSoftwareVersionsItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOcvpSupportedVmwareSoftwareVersionsItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.get"></a>

```go
func Get(index *f64) DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociocvpsupportedvmwaresoftwareversions"

dataociocvpsupportedvmwaresoftwareversions.NewDataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.esxiSoftwareVersions">EsxiSoftwareVersions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList">DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItems">DataOciOcvpSupportedVmwareSoftwareVersionsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EsxiSoftwareVersions`<sup>Required</sup> <a name="EsxiSoftwareVersions" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.esxiSoftwareVersions"></a>

```go
func EsxiSoftwareVersions() DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList">DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOcvpSupportedVmwareSoftwareVersionsItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItems">DataOciOcvpSupportedVmwareSoftwareVersionsItems</a>

---



