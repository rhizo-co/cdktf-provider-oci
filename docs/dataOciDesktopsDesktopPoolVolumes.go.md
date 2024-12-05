# `dataOciDesktopsDesktopPoolVolumes` Submodule <a name="`dataOciDesktopsDesktopPoolVolumes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDesktopsDesktopPoolVolumes <a name="DataOciDesktopsDesktopPoolVolumes" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes oci_desktops_desktop_pool_volumes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppoolvolumes"

dataocidesktopsdesktoppoolvolumes.NewDataOciDesktopsDesktopPoolVolumes(scope Construct, id *string, config DataOciDesktopsDesktopPoolVolumesConfig) DataOciDesktopsDesktopPoolVolumes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig">DataOciDesktopsDesktopPoolVolumesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig">DataOciDesktopsDesktopPoolVolumesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDesktopsDesktopPoolVolumes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppoolvolumes"

dataocidesktopsdesktoppoolvolumes.DataOciDesktopsDesktopPoolVolumes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppoolvolumes"

dataocidesktopsdesktoppoolvolumes.DataOciDesktopsDesktopPoolVolumes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppoolvolumes"

dataocidesktopsdesktoppoolvolumes.DataOciDesktopsDesktopPoolVolumes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppoolvolumes"

dataocidesktopsdesktoppoolvolumes.DataOciDesktopsDesktopPoolVolumes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDesktopsDesktopPoolVolumes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDesktopsDesktopPoolVolumes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDesktopsDesktopPoolVolumes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDesktopsDesktopPoolVolumes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.desktopPoolVolumeCollection">DesktopPoolVolumeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList">DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList">DataOciDesktopsDesktopPoolVolumesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.desktopPoolIdInput">DesktopPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.desktopPoolId">DesktopPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DesktopPoolVolumeCollection`<sup>Required</sup> <a name="DesktopPoolVolumeCollection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.desktopPoolVolumeCollection"></a>

```go
func DesktopPoolVolumeCollection() DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList">DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.filter"></a>

```go
func Filter() DataOciDesktopsDesktopPoolVolumesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList">DataOciDesktopsDesktopPoolVolumesFilterList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DesktopPoolIdInput`<sup>Optional</sup> <a name="DesktopPoolIdInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.desktopPoolIdInput"></a>

```go
func DesktopPoolIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DesktopPoolId`<sup>Required</sup> <a name="DesktopPoolId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.desktopPoolId"></a>

```go
func DesktopPoolId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDesktopsDesktopPoolVolumesConfig <a name="DataOciDesktopsDesktopPoolVolumesConfig" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppoolvolumes"

&dataocidesktopsdesktoppoolvolumes.DataOciDesktopsDesktopPoolVolumesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DesktopPoolId: *string,
	AvailabilityDomain: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#compartment_id DataOciDesktopsDesktopPoolVolumes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.desktopPoolId">DesktopPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#desktop_pool_id DataOciDesktopsDesktopPoolVolumes#desktop_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#availability_domain DataOciDesktopsDesktopPoolVolumes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#display_name DataOciDesktopsDesktopPoolVolumes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#id DataOciDesktopsDesktopPoolVolumes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#state DataOciDesktopsDesktopPoolVolumes#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#compartment_id DataOciDesktopsDesktopPoolVolumes#compartment_id}.

---

##### `DesktopPoolId`<sup>Required</sup> <a name="DesktopPoolId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.desktopPoolId"></a>

```go
DesktopPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#desktop_pool_id DataOciDesktopsDesktopPoolVolumes#desktop_pool_id}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#availability_domain DataOciDesktopsDesktopPoolVolumes#availability_domain}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#display_name DataOciDesktopsDesktopPoolVolumes#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#filter DataOciDesktopsDesktopPoolVolumes#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#id DataOciDesktopsDesktopPoolVolumes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#state DataOciDesktopsDesktopPoolVolumes#state}.

---

### DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollection <a name="DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppoolvolumes"

&dataocidesktopsdesktoppoolvolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollection {

}
```


### DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItems <a name="DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppoolvolumes"

&dataocidesktopsdesktoppoolvolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItems {

}
```


### DataOciDesktopsDesktopPoolVolumesFilter <a name="DataOciDesktopsDesktopPoolVolumesFilter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppoolvolumes"

&dataocidesktopsdesktoppoolvolumes.DataOciDesktopsDesktopPoolVolumesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#name DataOciDesktopsDesktopPoolVolumes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#values DataOciDesktopsDesktopPoolVolumes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#regex DataOciDesktopsDesktopPoolVolumes#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#name DataOciDesktopsDesktopPoolVolumes#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#values DataOciDesktopsDesktopPoolVolumes#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#regex DataOciDesktopsDesktopPoolVolumes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList <a name="DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppoolvolumes"

dataocidesktopsdesktoppoolvolumes.NewDataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference <a name="DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppoolvolumes"

dataocidesktopsdesktoppoolvolumes.NewDataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.poolId">PoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItems">DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.poolId"></a>

```go
func PoolId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItems">DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItems</a>

---


### DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList <a name="DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppoolvolumes"

dataocidesktopsdesktoppoolvolumes.NewDataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.get"></a>

```go
func Get(index *f64) DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference <a name="DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppoolvolumes"

dataocidesktopsdesktoppoolvolumes.NewDataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList">DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollection">DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList">DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollection">DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollection</a>

---


### DataOciDesktopsDesktopPoolVolumesFilterList <a name="DataOciDesktopsDesktopPoolVolumesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppoolvolumes"

dataocidesktopsdesktoppoolvolumes.NewDataOciDesktopsDesktopPoolVolumesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDesktopsDesktopPoolVolumesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.get"></a>

```go
func Get(index *f64) DataOciDesktopsDesktopPoolVolumesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDesktopsDesktopPoolVolumesFilterOutputReference <a name="DataOciDesktopsDesktopPoolVolumesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppoolvolumes"

dataocidesktopsdesktoppoolvolumes.NewDataOciDesktopsDesktopPoolVolumesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDesktopsDesktopPoolVolumesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



