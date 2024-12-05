# `dataOciOsmanagementManagedInstanceStreamProfiles` Submodule <a name="`dataOciOsmanagementManagedInstanceStreamProfiles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsmanagementManagedInstanceStreamProfiles <a name="DataOciOsmanagementManagedInstanceStreamProfiles" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles oci_osmanagement_managed_instance_stream_profiles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancestreamprofiles"

dataociosmanagementmanagedinstancestreamprofiles.NewDataOciOsmanagementManagedInstanceStreamProfiles(scope Construct, id *string, config DataOciOsmanagementManagedInstanceStreamProfilesConfig) DataOciOsmanagementManagedInstanceStreamProfiles
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig">DataOciOsmanagementManagedInstanceStreamProfilesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig">DataOciOsmanagementManagedInstanceStreamProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetModuleName">ResetModuleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetProfileName">ResetProfileName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetProfileStatus">ResetProfileStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetStreamName">ResetStreamName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetId"></a>

```go
func ResetId()
```

##### `ResetModuleName` <a name="ResetModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetModuleName"></a>

```go
func ResetModuleName()
```

##### `ResetProfileName` <a name="ResetProfileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetProfileName"></a>

```go
func ResetProfileName()
```

##### `ResetProfileStatus` <a name="ResetProfileStatus" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetProfileStatus"></a>

```go
func ResetProfileStatus()
```

##### `ResetStreamName` <a name="ResetStreamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetStreamName"></a>

```go
func ResetStreamName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceStreamProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancestreamprofiles"

dataociosmanagementmanagedinstancestreamprofiles.DataOciOsmanagementManagedInstanceStreamProfiles_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancestreamprofiles"

dataociosmanagementmanagedinstancestreamprofiles.DataOciOsmanagementManagedInstanceStreamProfiles_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancestreamprofiles"

dataociosmanagementmanagedinstancestreamprofiles.DataOciOsmanagementManagedInstanceStreamProfiles_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancestreamprofiles"

dataociosmanagementmanagedinstancestreamprofiles.DataOciOsmanagementManagedInstanceStreamProfiles_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceStreamProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOsmanagementManagedInstanceStreamProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOsmanagementManagedInstanceStreamProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsmanagementManagedInstanceStreamProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList">DataOciOsmanagementManagedInstanceStreamProfilesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleStreamProfileOnManagedInstances">ModuleStreamProfileOnManagedInstances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList">DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleNameInput">ModuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileNameInput">ProfileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileStatusInput">ProfileStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.streamNameInput">StreamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleName">ModuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileName">ProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileStatus">ProfileStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.filter"></a>

```go
func Filter() DataOciOsmanagementManagedInstanceStreamProfilesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList">DataOciOsmanagementManagedInstanceStreamProfilesFilterList</a>

---

##### `ModuleStreamProfileOnManagedInstances`<sup>Required</sup> <a name="ModuleStreamProfileOnManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleStreamProfileOnManagedInstances"></a>

```go
func ModuleStreamProfileOnManagedInstances() DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList">DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.managedInstanceIdInput"></a>

```go
func ManagedInstanceIdInput() *string
```

- *Type:* *string

---

##### `ModuleNameInput`<sup>Optional</sup> <a name="ModuleNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleNameInput"></a>

```go
func ModuleNameInput() *string
```

- *Type:* *string

---

##### `ProfileNameInput`<sup>Optional</sup> <a name="ProfileNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileNameInput"></a>

```go
func ProfileNameInput() *string
```

- *Type:* *string

---

##### `ProfileStatusInput`<sup>Optional</sup> <a name="ProfileStatusInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileStatusInput"></a>

```go
func ProfileStatusInput() *string
```

- *Type:* *string

---

##### `StreamNameInput`<sup>Optional</sup> <a name="StreamNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.streamNameInput"></a>

```go
func StreamNameInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.managedInstanceId"></a>

```go
func ManagedInstanceId() *string
```

- *Type:* *string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleName"></a>

```go
func ModuleName() *string
```

- *Type:* *string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileName"></a>

```go
func ProfileName() *string
```

- *Type:* *string

---

##### `ProfileStatus`<sup>Required</sup> <a name="ProfileStatus" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileStatus"></a>

```go
func ProfileStatus() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsmanagementManagedInstanceStreamProfilesConfig <a name="DataOciOsmanagementManagedInstanceStreamProfilesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancestreamprofiles"

&dataociosmanagementmanagedinstancestreamprofiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedInstanceId: *string,
	CompartmentId: *string,
	Filter: interface{},
	Id: *string,
	ModuleName: *string,
	ProfileName: *string,
	ProfileStatus: *string,
	StreamName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#managed_instance_id DataOciOsmanagementManagedInstanceStreamProfiles#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#compartment_id DataOciOsmanagementManagedInstanceStreamProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#id DataOciOsmanagementManagedInstanceStreamProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.moduleName">ModuleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#module_name DataOciOsmanagementManagedInstanceStreamProfiles#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.profileName">ProfileName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#profile_name DataOciOsmanagementManagedInstanceStreamProfiles#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.profileStatus">ProfileStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#profile_status DataOciOsmanagementManagedInstanceStreamProfiles#profile_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.streamName">StreamName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#stream_name DataOciOsmanagementManagedInstanceStreamProfiles#stream_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.managedInstanceId"></a>

```go
ManagedInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#managed_instance_id DataOciOsmanagementManagedInstanceStreamProfiles#managed_instance_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#compartment_id DataOciOsmanagementManagedInstanceStreamProfiles#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#filter DataOciOsmanagementManagedInstanceStreamProfiles#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#id DataOciOsmanagementManagedInstanceStreamProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ModuleName`<sup>Optional</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.moduleName"></a>

```go
ModuleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#module_name DataOciOsmanagementManagedInstanceStreamProfiles#module_name}.

---

##### `ProfileName`<sup>Optional</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.profileName"></a>

```go
ProfileName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#profile_name DataOciOsmanagementManagedInstanceStreamProfiles#profile_name}.

---

##### `ProfileStatus`<sup>Optional</sup> <a name="ProfileStatus" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.profileStatus"></a>

```go
ProfileStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#profile_status DataOciOsmanagementManagedInstanceStreamProfiles#profile_status}.

---

##### `StreamName`<sup>Optional</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.streamName"></a>

```go
StreamName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#stream_name DataOciOsmanagementManagedInstanceStreamProfiles#stream_name}.

---

### DataOciOsmanagementManagedInstanceStreamProfilesFilter <a name="DataOciOsmanagementManagedInstanceStreamProfilesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancestreamprofiles"

&dataociosmanagementmanagedinstancestreamprofiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#name DataOciOsmanagementManagedInstanceStreamProfiles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#values DataOciOsmanagementManagedInstanceStreamProfiles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#regex DataOciOsmanagementManagedInstanceStreamProfiles#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#name DataOciOsmanagementManagedInstanceStreamProfiles#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#values DataOciOsmanagementManagedInstanceStreamProfiles#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#regex DataOciOsmanagementManagedInstanceStreamProfiles#regex}.

---

### DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances <a name="DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancestreamprofiles"

&dataociosmanagementmanagedinstancestreamprofiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsmanagementManagedInstanceStreamProfilesFilterList <a name="DataOciOsmanagementManagedInstanceStreamProfilesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancestreamprofiles"

dataociosmanagementmanagedinstancestreamprofiles.NewDataOciOsmanagementManagedInstanceStreamProfilesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsmanagementManagedInstanceStreamProfilesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.get"></a>

```go
func Get(index *f64) DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference <a name="DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancestreamprofiles"

dataociosmanagementmanagedinstancestreamprofiles.NewDataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList <a name="DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancestreamprofiles"

dataociosmanagementmanagedinstancestreamprofiles.NewDataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.get"></a>

```go
func Get(index *f64) DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference <a name="DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancestreamprofiles"

dataociosmanagementmanagedinstancestreamprofiles.NewDataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.moduleName">ModuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.profileName">ProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.timeModified">TimeModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances">DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.moduleName"></a>

```go
func ModuleName() *string
```

- *Type:* *string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.profileName"></a>

```go
func ProfileName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

##### `TimeModified`<sup>Required</sup> <a name="TimeModified" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.timeModified"></a>

```go
func TimeModified() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances">DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances</a>

---



