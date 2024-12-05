# `dataOciDesktopsDesktopPoolDesktops` Submodule <a name="`dataOciDesktopsDesktopPoolDesktops` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDesktopsDesktopPoolDesktops <a name="DataOciDesktopsDesktopPoolDesktops" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops oci_desktops_desktop_pool_desktops}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppooldesktops"

dataocidesktopsdesktoppooldesktops.NewDataOciDesktopsDesktopPoolDesktops(scope Construct, id *string, config DataOciDesktopsDesktopPoolDesktopsConfig) DataOciDesktopsDesktopPoolDesktops
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig">DataOciDesktopsDesktopPoolDesktopsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig">DataOciDesktopsDesktopPoolDesktopsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDesktopsDesktopPoolDesktops resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppooldesktops"

dataocidesktopsdesktoppooldesktops.DataOciDesktopsDesktopPoolDesktops_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppooldesktops"

dataocidesktopsdesktoppooldesktops.DataOciDesktopsDesktopPoolDesktops_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppooldesktops"

dataocidesktopsdesktoppooldesktops.DataOciDesktopsDesktopPoolDesktops_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppooldesktops"

dataocidesktopsdesktoppooldesktops.DataOciDesktopsDesktopPoolDesktops_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDesktopsDesktopPoolDesktops resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDesktopsDesktopPoolDesktops to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDesktopsDesktopPoolDesktops that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDesktopsDesktopPoolDesktops to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.desktopPoolDesktopCollection">DesktopPoolDesktopCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList">DataOciDesktopsDesktopPoolDesktopsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.desktopPoolIdInput">DesktopPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.desktopPoolId">DesktopPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DesktopPoolDesktopCollection`<sup>Required</sup> <a name="DesktopPoolDesktopCollection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.desktopPoolDesktopCollection"></a>

```go
func DesktopPoolDesktopCollection() DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.filter"></a>

```go
func Filter() DataOciDesktopsDesktopPoolDesktopsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList">DataOciDesktopsDesktopPoolDesktopsFilterList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DesktopPoolIdInput`<sup>Optional</sup> <a name="DesktopPoolIdInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.desktopPoolIdInput"></a>

```go
func DesktopPoolIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DesktopPoolId`<sup>Required</sup> <a name="DesktopPoolId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.desktopPoolId"></a>

```go
func DesktopPoolId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDesktopsDesktopPoolDesktopsConfig <a name="DataOciDesktopsDesktopPoolDesktopsConfig" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppooldesktops"

&dataocidesktopsdesktoppooldesktops.DataOciDesktopsDesktopPoolDesktopsConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#compartment_id DataOciDesktopsDesktopPoolDesktops#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.desktopPoolId">DesktopPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#desktop_pool_id DataOciDesktopsDesktopPoolDesktops#desktop_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#availability_domain DataOciDesktopsDesktopPoolDesktops#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#display_name DataOciDesktopsDesktopPoolDesktops#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#id DataOciDesktopsDesktopPoolDesktops#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#state DataOciDesktopsDesktopPoolDesktops#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#compartment_id DataOciDesktopsDesktopPoolDesktops#compartment_id}.

---

##### `DesktopPoolId`<sup>Required</sup> <a name="DesktopPoolId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.desktopPoolId"></a>

```go
DesktopPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#desktop_pool_id DataOciDesktopsDesktopPoolDesktops#desktop_pool_id}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#availability_domain DataOciDesktopsDesktopPoolDesktops#availability_domain}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#display_name DataOciDesktopsDesktopPoolDesktops#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#filter DataOciDesktopsDesktopPoolDesktops#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#id DataOciDesktopsDesktopPoolDesktops#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#state DataOciDesktopsDesktopPoolDesktops#state}.

---

### DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection <a name="DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppooldesktops"

&dataocidesktopsdesktoppooldesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection {

}
```


### DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems <a name="DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppooldesktops"

&dataocidesktopsdesktoppooldesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems {

}
```


### DataOciDesktopsDesktopPoolDesktopsFilter <a name="DataOciDesktopsDesktopPoolDesktopsFilter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppooldesktops"

&dataocidesktopsdesktoppooldesktops.DataOciDesktopsDesktopPoolDesktopsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#name DataOciDesktopsDesktopPoolDesktops#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#values DataOciDesktopsDesktopPoolDesktops#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#regex DataOciDesktopsDesktopPoolDesktops#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#name DataOciDesktopsDesktopPoolDesktops#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#values DataOciDesktopsDesktopPoolDesktops#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#regex DataOciDesktopsDesktopPoolDesktops#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList <a name="DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppooldesktops"

dataocidesktopsdesktoppooldesktops.NewDataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference <a name="DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppooldesktops"

dataocidesktopsdesktoppooldesktops.NewDataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.desktopId">DesktopId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.isAssigned">IsAssigned</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DesktopId`<sup>Required</sup> <a name="DesktopId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.desktopId"></a>

```go
func DesktopId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `IsAssigned`<sup>Required</sup> <a name="IsAssigned" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.isAssigned"></a>

```go
func IsAssigned() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems</a>

---


### DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList <a name="DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppooldesktops"

dataocidesktopsdesktoppooldesktops.NewDataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.get"></a>

```go
func Get(index *f64) DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference <a name="DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppooldesktops"

dataocidesktopsdesktoppooldesktops.NewDataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection</a>

---


### DataOciDesktopsDesktopPoolDesktopsFilterList <a name="DataOciDesktopsDesktopPoolDesktopsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppooldesktops"

dataocidesktopsdesktoppooldesktops.NewDataOciDesktopsDesktopPoolDesktopsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDesktopsDesktopPoolDesktopsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.get"></a>

```go
func Get(index *f64) DataOciDesktopsDesktopPoolDesktopsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDesktopsDesktopPoolDesktopsFilterOutputReference <a name="DataOciDesktopsDesktopPoolDesktopsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidesktopsdesktoppooldesktops"

dataocidesktopsdesktoppooldesktops.NewDataOciDesktopsDesktopPoolDesktopsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDesktopsDesktopPoolDesktopsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



