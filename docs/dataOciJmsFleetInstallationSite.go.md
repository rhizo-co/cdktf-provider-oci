# `dataOciJmsFleetInstallationSite` Submodule <a name="`dataOciJmsFleetInstallationSite` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsFleetInstallationSite <a name="DataOciJmsFleetInstallationSite" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site oci_jms_fleet_installation_site}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetinstallationsite"

dataocijmsfleetinstallationsite.NewDataOciJmsFleetInstallationSite(scope Construct, id *string, config DataOciJmsFleetInstallationSiteConfig) DataOciJmsFleetInstallationSite
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig">DataOciJmsFleetInstallationSiteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig">DataOciJmsFleetInstallationSiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetApplicationId">ResetApplicationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetInstallationPath">ResetInstallationPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreDistribution">ResetJreDistribution</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreSecurityStatus">ResetJreSecurityStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreVendor">ResetJreVendor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreVersion">ResetJreVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetManagedInstanceId">ResetManagedInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetOsFamily">ResetOsFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetPathContains">ResetPathContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetTimeEnd">ResetTimeEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetTimeStart">ResetTimeStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetApplicationId` <a name="ResetApplicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetApplicationId"></a>

```go
func ResetApplicationId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetId"></a>

```go
func ResetId()
```

##### `ResetInstallationPath` <a name="ResetInstallationPath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetInstallationPath"></a>

```go
func ResetInstallationPath()
```

##### `ResetJreDistribution` <a name="ResetJreDistribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreDistribution"></a>

```go
func ResetJreDistribution()
```

##### `ResetJreSecurityStatus` <a name="ResetJreSecurityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreSecurityStatus"></a>

```go
func ResetJreSecurityStatus()
```

##### `ResetJreVendor` <a name="ResetJreVendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreVendor"></a>

```go
func ResetJreVendor()
```

##### `ResetJreVersion` <a name="ResetJreVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetJreVersion"></a>

```go
func ResetJreVersion()
```

##### `ResetManagedInstanceId` <a name="ResetManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetManagedInstanceId"></a>

```go
func ResetManagedInstanceId()
```

##### `ResetOsFamily` <a name="ResetOsFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetOsFamily"></a>

```go
func ResetOsFamily()
```

##### `ResetPathContains` <a name="ResetPathContains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetPathContains"></a>

```go
func ResetPathContains()
```

##### `ResetTimeEnd` <a name="ResetTimeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetTimeEnd"></a>

```go
func ResetTimeEnd()
```

##### `ResetTimeStart` <a name="ResetTimeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.resetTimeStart"></a>

```go
func ResetTimeStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsFleetInstallationSite resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetinstallationsite"

dataocijmsfleetinstallationsite.DataOciJmsFleetInstallationSite_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetinstallationsite"

dataocijmsfleetinstallationsite.DataOciJmsFleetInstallationSite_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetinstallationsite"

dataocijmsfleetinstallationsite.DataOciJmsFleetInstallationSite_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetinstallationsite"

dataocijmsfleetinstallationsite.DataOciJmsFleetInstallationSite_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciJmsFleetInstallationSite resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciJmsFleetInstallationSite to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciJmsFleetInstallationSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsFleetInstallationSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList">DataOciJmsFleetInstallationSiteItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.fleetIdInput">FleetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.installationPathInput">InstallationPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreDistributionInput">JreDistributionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreSecurityStatusInput">JreSecurityStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVendorInput">JreVendorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVersionInput">JreVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.osFamilyInput">OsFamilyInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.pathContainsInput">PathContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeEndInput">TimeEndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeStartInput">TimeStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.fleetId">FleetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.installationPath">InstallationPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreDistribution">JreDistribution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreSecurityStatus">JreSecurityStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVendor">JreVendor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVersion">JreVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.osFamily">OsFamily</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.pathContains">PathContains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.items"></a>

```go
func Items() DataOciJmsFleetInstallationSiteItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList">DataOciJmsFleetInstallationSiteItemsList</a>

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `FleetIdInput`<sup>Optional</sup> <a name="FleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.fleetIdInput"></a>

```go
func FleetIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstallationPathInput`<sup>Optional</sup> <a name="InstallationPathInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.installationPathInput"></a>

```go
func InstallationPathInput() *string
```

- *Type:* *string

---

##### `JreDistributionInput`<sup>Optional</sup> <a name="JreDistributionInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreDistributionInput"></a>

```go
func JreDistributionInput() *string
```

- *Type:* *string

---

##### `JreSecurityStatusInput`<sup>Optional</sup> <a name="JreSecurityStatusInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreSecurityStatusInput"></a>

```go
func JreSecurityStatusInput() *string
```

- *Type:* *string

---

##### `JreVendorInput`<sup>Optional</sup> <a name="JreVendorInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVendorInput"></a>

```go
func JreVendorInput() *string
```

- *Type:* *string

---

##### `JreVersionInput`<sup>Optional</sup> <a name="JreVersionInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVersionInput"></a>

```go
func JreVersionInput() *string
```

- *Type:* *string

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.managedInstanceIdInput"></a>

```go
func ManagedInstanceIdInput() *string
```

- *Type:* *string

---

##### `OsFamilyInput`<sup>Optional</sup> <a name="OsFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.osFamilyInput"></a>

```go
func OsFamilyInput() *[]*string
```

- *Type:* *[]*string

---

##### `PathContainsInput`<sup>Optional</sup> <a name="PathContainsInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.pathContainsInput"></a>

```go
func PathContainsInput() *string
```

- *Type:* *string

---

##### `TimeEndInput`<sup>Optional</sup> <a name="TimeEndInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeEndInput"></a>

```go
func TimeEndInput() *string
```

- *Type:* *string

---

##### `TimeStartInput`<sup>Optional</sup> <a name="TimeStartInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeStartInput"></a>

```go
func TimeStartInput() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.fleetId"></a>

```go
func FleetId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstallationPath`<sup>Required</sup> <a name="InstallationPath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.installationPath"></a>

```go
func InstallationPath() *string
```

- *Type:* *string

---

##### `JreDistribution`<sup>Required</sup> <a name="JreDistribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreDistribution"></a>

```go
func JreDistribution() *string
```

- *Type:* *string

---

##### `JreSecurityStatus`<sup>Required</sup> <a name="JreSecurityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreSecurityStatus"></a>

```go
func JreSecurityStatus() *string
```

- *Type:* *string

---

##### `JreVendor`<sup>Required</sup> <a name="JreVendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVendor"></a>

```go
func JreVendor() *string
```

- *Type:* *string

---

##### `JreVersion`<sup>Required</sup> <a name="JreVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.jreVersion"></a>

```go
func JreVersion() *string
```

- *Type:* *string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.managedInstanceId"></a>

```go
func ManagedInstanceId() *string
```

- *Type:* *string

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.osFamily"></a>

```go
func OsFamily() *[]*string
```

- *Type:* *[]*string

---

##### `PathContains`<sup>Required</sup> <a name="PathContains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.pathContains"></a>

```go
func PathContains() *string
```

- *Type:* *string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSite.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsFleetInstallationSiteConfig <a name="DataOciJmsFleetInstallationSiteConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetinstallationsite"

&dataocijmsfleetinstallationsite.DataOciJmsFleetInstallationSiteConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FleetId: *string,
	ApplicationId: *string,
	Id: *string,
	InstallationPath: *string,
	JreDistribution: *string,
	JreSecurityStatus: *string,
	JreVendor: *string,
	JreVersion: *string,
	ManagedInstanceId: *string,
	OsFamily: *[]*string,
	PathContains: *string,
	TimeEnd: *string,
	TimeStart: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.fleetId">FleetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#fleet_id DataOciJmsFleetInstallationSite#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#application_id DataOciJmsFleetInstallationSite#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#id DataOciJmsFleetInstallationSite#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.installationPath">InstallationPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#installation_path DataOciJmsFleetInstallationSite#installation_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreDistribution">JreDistribution</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_distribution DataOciJmsFleetInstallationSite#jre_distribution}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreSecurityStatus">JreSecurityStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_security_status DataOciJmsFleetInstallationSite#jre_security_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreVendor">JreVendor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_vendor DataOciJmsFleetInstallationSite#jre_vendor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreVersion">JreVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_version DataOciJmsFleetInstallationSite#jre_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#managed_instance_id DataOciJmsFleetInstallationSite#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.osFamily">OsFamily</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#os_family DataOciJmsFleetInstallationSite#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.pathContains">PathContains</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#path_contains DataOciJmsFleetInstallationSite#path_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#time_end DataOciJmsFleetInstallationSite#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.timeStart">TimeStart</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#time_start DataOciJmsFleetInstallationSite#time_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.fleetId"></a>

```go
FleetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#fleet_id DataOciJmsFleetInstallationSite#fleet_id}.

---

##### `ApplicationId`<sup>Optional</sup> <a name="ApplicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#application_id DataOciJmsFleetInstallationSite#application_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#id DataOciJmsFleetInstallationSite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstallationPath`<sup>Optional</sup> <a name="InstallationPath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.installationPath"></a>

```go
InstallationPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#installation_path DataOciJmsFleetInstallationSite#installation_path}.

---

##### `JreDistribution`<sup>Optional</sup> <a name="JreDistribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreDistribution"></a>

```go
JreDistribution *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_distribution DataOciJmsFleetInstallationSite#jre_distribution}.

---

##### `JreSecurityStatus`<sup>Optional</sup> <a name="JreSecurityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreSecurityStatus"></a>

```go
JreSecurityStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_security_status DataOciJmsFleetInstallationSite#jre_security_status}.

---

##### `JreVendor`<sup>Optional</sup> <a name="JreVendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreVendor"></a>

```go
JreVendor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_vendor DataOciJmsFleetInstallationSite#jre_vendor}.

---

##### `JreVersion`<sup>Optional</sup> <a name="JreVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.jreVersion"></a>

```go
JreVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#jre_version DataOciJmsFleetInstallationSite#jre_version}.

---

##### `ManagedInstanceId`<sup>Optional</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.managedInstanceId"></a>

```go
ManagedInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#managed_instance_id DataOciJmsFleetInstallationSite#managed_instance_id}.

---

##### `OsFamily`<sup>Optional</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.osFamily"></a>

```go
OsFamily *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#os_family DataOciJmsFleetInstallationSite#os_family}.

---

##### `PathContains`<sup>Optional</sup> <a name="PathContains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.pathContains"></a>

```go
PathContains *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#path_contains DataOciJmsFleetInstallationSite#path_contains}.

---

##### `TimeEnd`<sup>Optional</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.timeEnd"></a>

```go
TimeEnd *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#time_end DataOciJmsFleetInstallationSite#time_end}.

---

##### `TimeStart`<sup>Optional</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteConfig.property.timeStart"></a>

```go
TimeStart *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_site#time_start DataOciJmsFleetInstallationSite#time_start}.

---

### DataOciJmsFleetInstallationSiteItems <a name="DataOciJmsFleetInstallationSiteItems" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetinstallationsite"

&dataocijmsfleetinstallationsite.DataOciJmsFleetInstallationSiteItems {

}
```


### DataOciJmsFleetInstallationSiteItemsBlocklistStruct <a name="DataOciJmsFleetInstallationSiteItemsBlocklistStruct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetinstallationsite"

&dataocijmsfleetinstallationsite.DataOciJmsFleetInstallationSiteItemsBlocklistStruct {

}
```


### DataOciJmsFleetInstallationSiteItemsJre <a name="DataOciJmsFleetInstallationSiteItemsJre" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJre"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJre.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetinstallationsite"

&dataocijmsfleetinstallationsite.DataOciJmsFleetInstallationSiteItemsJre {

}
```


### DataOciJmsFleetInstallationSiteItemsOperatingSystem <a name="DataOciJmsFleetInstallationSiteItemsOperatingSystem" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystem"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystem.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetinstallationsite"

&dataocijmsfleetinstallationsite.DataOciJmsFleetInstallationSiteItemsOperatingSystem {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsFleetInstallationSiteItemsBlocklistStructList <a name="DataOciJmsFleetInstallationSiteItemsBlocklistStructList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetinstallationsite"

dataocijmsfleetinstallationsite.NewDataOciJmsFleetInstallationSiteItemsBlocklistStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsFleetInstallationSiteItemsBlocklistStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.get"></a>

```go
func Get(index *f64) DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference <a name="DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetinstallationsite"

dataocijmsfleetinstallationsite.NewDataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStruct">DataOciJmsFleetInstallationSiteItemsBlocklistStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciJmsFleetInstallationSiteItemsBlocklistStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStruct">DataOciJmsFleetInstallationSiteItemsBlocklistStruct</a>

---


### DataOciJmsFleetInstallationSiteItemsJreList <a name="DataOciJmsFleetInstallationSiteItemsJreList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetinstallationsite"

dataocijmsfleetinstallationsite.NewDataOciJmsFleetInstallationSiteItemsJreList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsFleetInstallationSiteItemsJreList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.get"></a>

```go
func Get(index *f64) DataOciJmsFleetInstallationSiteItemsJreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciJmsFleetInstallationSiteItemsJreOutputReference <a name="DataOciJmsFleetInstallationSiteItemsJreOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetinstallationsite"

dataocijmsfleetinstallationsite.NewDataOciJmsFleetInstallationSiteItemsJreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsFleetInstallationSiteItemsJreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.distribution">Distribution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.jreKey">JreKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.vendor">Vendor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJre">DataOciJmsFleetInstallationSiteItemsJre</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Distribution`<sup>Required</sup> <a name="Distribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.distribution"></a>

```go
func Distribution() *string
```

- *Type:* *string

---

##### `JreKey`<sup>Required</sup> <a name="JreKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.jreKey"></a>

```go
func JreKey() *string
```

- *Type:* *string

---

##### `Vendor`<sup>Required</sup> <a name="Vendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.vendor"></a>

```go
func Vendor() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciJmsFleetInstallationSiteItemsJre
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJre">DataOciJmsFleetInstallationSiteItemsJre</a>

---


### DataOciJmsFleetInstallationSiteItemsList <a name="DataOciJmsFleetInstallationSiteItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetinstallationsite"

dataocijmsfleetinstallationsite.NewDataOciJmsFleetInstallationSiteItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsFleetInstallationSiteItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.get"></a>

```go
func Get(index *f64) DataOciJmsFleetInstallationSiteItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciJmsFleetInstallationSiteItemsOperatingSystemList <a name="DataOciJmsFleetInstallationSiteItemsOperatingSystemList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetinstallationsite"

dataocijmsfleetinstallationsite.NewDataOciJmsFleetInstallationSiteItemsOperatingSystemList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsFleetInstallationSiteItemsOperatingSystemList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.get"></a>

```go
func Get(index *f64) DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference <a name="DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetinstallationsite"

dataocijmsfleetinstallationsite.NewDataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.architecture">Architecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.family">Family</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.managedInstanceCount">ManagedInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystem">DataOciJmsFleetInstallationSiteItemsOperatingSystem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.architecture"></a>

```go
func Architecture() *string
```

- *Type:* *string

---

##### `Family`<sup>Required</sup> <a name="Family" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.family"></a>

```go
func Family() *string
```

- *Type:* *string

---

##### `ManagedInstanceCount`<sup>Required</sup> <a name="ManagedInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.managedInstanceCount"></a>

```go
func ManagedInstanceCount() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciJmsFleetInstallationSiteItemsOperatingSystem
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystem">DataOciJmsFleetInstallationSiteItemsOperatingSystem</a>

---


### DataOciJmsFleetInstallationSiteItemsOutputReference <a name="DataOciJmsFleetInstallationSiteItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsfleetinstallationsite"

dataocijmsfleetinstallationsite.NewDataOciJmsFleetInstallationSiteItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsFleetInstallationSiteItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.approximateApplicationCount">ApproximateApplicationCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.blocklist">Blocklist</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList">DataOciJmsFleetInstallationSiteItemsBlocklistStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.installationKey">InstallationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.jre">Jre</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList">DataOciJmsFleetInstallationSiteItemsJreList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList">DataOciJmsFleetInstallationSiteItemsOperatingSystemList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.securityStatus">SecurityStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.timeLastSeen">TimeLastSeen</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItems">DataOciJmsFleetInstallationSiteItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApproximateApplicationCount`<sup>Required</sup> <a name="ApproximateApplicationCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.approximateApplicationCount"></a>

```go
func ApproximateApplicationCount() *f64
```

- *Type:* *f64

---

##### `Blocklist`<sup>Required</sup> <a name="Blocklist" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.blocklist"></a>

```go
func Blocklist() DataOciJmsFleetInstallationSiteItemsBlocklistStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsBlocklistStructList">DataOciJmsFleetInstallationSiteItemsBlocklistStructList</a>

---

##### `InstallationKey`<sup>Required</sup> <a name="InstallationKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.installationKey"></a>

```go
func InstallationKey() *string
```

- *Type:* *string

---

##### `Jre`<sup>Required</sup> <a name="Jre" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.jre"></a>

```go
func Jre() DataOciJmsFleetInstallationSiteItemsJreList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsJreList">DataOciJmsFleetInstallationSiteItemsJreList</a>

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.managedInstanceId"></a>

```go
func ManagedInstanceId() *string
```

- *Type:* *string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.operatingSystem"></a>

```go
func OperatingSystem() DataOciJmsFleetInstallationSiteItemsOperatingSystemList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOperatingSystemList">DataOciJmsFleetInstallationSiteItemsOperatingSystemList</a>

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `SecurityStatus`<sup>Required</sup> <a name="SecurityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.securityStatus"></a>

```go
func SecurityStatus() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeLastSeen`<sup>Required</sup> <a name="TimeLastSeen" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.timeLastSeen"></a>

```go
func TimeLastSeen() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciJmsFleetInstallationSiteItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSite.DataOciJmsFleetInstallationSiteItems">DataOciJmsFleetInstallationSiteItems</a>

---



