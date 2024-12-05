# `dataOciDataSafeListUserGrants` Submodule <a name="`dataOciDataSafeListUserGrants` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeListUserGrants <a name="DataOciDataSafeListUserGrants" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants oci_data_safe_list_user_grants}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelistusergrants"

dataocidatasafelistusergrants.NewDataOciDataSafeListUserGrants(scope Construct, id *string, config DataOciDataSafeListUserGrantsConfig) DataOciDataSafeListUserGrants
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig">DataOciDataSafeListUserGrantsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig">DataOciDataSafeListUserGrantsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevel">ResetDepthLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevelGreaterThanOrEqualTo">ResetDepthLevelGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevelLessThan">ResetDepthLevelLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetGrantKey">ResetGrantKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetGrantName">ResetGrantName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetPrivilegeCategory">ResetPrivilegeCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetPrivilegeType">ResetPrivilegeType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDepthLevel` <a name="ResetDepthLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevel"></a>

```go
func ResetDepthLevel()
```

##### `ResetDepthLevelGreaterThanOrEqualTo` <a name="ResetDepthLevelGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevelGreaterThanOrEqualTo"></a>

```go
func ResetDepthLevelGreaterThanOrEqualTo()
```

##### `ResetDepthLevelLessThan` <a name="ResetDepthLevelLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevelLessThan"></a>

```go
func ResetDepthLevelLessThan()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetGrantKey` <a name="ResetGrantKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetGrantKey"></a>

```go
func ResetGrantKey()
```

##### `ResetGrantName` <a name="ResetGrantName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetGrantName"></a>

```go
func ResetGrantName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetId"></a>

```go
func ResetId()
```

##### `ResetPrivilegeCategory` <a name="ResetPrivilegeCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetPrivilegeCategory"></a>

```go
func ResetPrivilegeCategory()
```

##### `ResetPrivilegeType` <a name="ResetPrivilegeType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetPrivilegeType"></a>

```go
func ResetPrivilegeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeListUserGrants resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelistusergrants"

dataocidatasafelistusergrants.DataOciDataSafeListUserGrants_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelistusergrants"

dataocidatasafelistusergrants.DataOciDataSafeListUserGrants_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelistusergrants"

dataocidatasafelistusergrants.DataOciDataSafeListUserGrants_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelistusergrants"

dataocidatasafelistusergrants.DataOciDataSafeListUserGrants_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeListUserGrants resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeListUserGrants to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeListUserGrants that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeListUserGrants to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList">DataOciDataSafeListUserGrantsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grants">Grants</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList">DataOciDataSafeListUserGrantsGrantsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelGreaterThanOrEqualToInput">DepthLevelGreaterThanOrEqualToInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelInput">DepthLevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelLessThanInput">DepthLevelLessThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantKeyInput">GrantKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantNameInput">GrantNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeCategoryInput">PrivilegeCategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeTypeInput">PrivilegeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userAssessmentIdInput">UserAssessmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userKeyInput">UserKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevel">DepthLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelGreaterThanOrEqualTo">DepthLevelGreaterThanOrEqualTo</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelLessThan">DepthLevelLessThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantKey">GrantKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantName">GrantName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeCategory">PrivilegeCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeType">PrivilegeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userAssessmentId">UserAssessmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userKey">UserKey</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.filter"></a>

```go
func Filter() DataOciDataSafeListUserGrantsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList">DataOciDataSafeListUserGrantsFilterList</a>

---

##### `Grants`<sup>Required</sup> <a name="Grants" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grants"></a>

```go
func Grants() DataOciDataSafeListUserGrantsGrantsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList">DataOciDataSafeListUserGrantsGrantsList</a>

---

##### `DepthLevelGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="DepthLevelGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelGreaterThanOrEqualToInput"></a>

```go
func DepthLevelGreaterThanOrEqualToInput() *f64
```

- *Type:* *f64

---

##### `DepthLevelInput`<sup>Optional</sup> <a name="DepthLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelInput"></a>

```go
func DepthLevelInput() *f64
```

- *Type:* *f64

---

##### `DepthLevelLessThanInput`<sup>Optional</sup> <a name="DepthLevelLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelLessThanInput"></a>

```go
func DepthLevelLessThanInput() *f64
```

- *Type:* *f64

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `GrantKeyInput`<sup>Optional</sup> <a name="GrantKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantKeyInput"></a>

```go
func GrantKeyInput() *string
```

- *Type:* *string

---

##### `GrantNameInput`<sup>Optional</sup> <a name="GrantNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantNameInput"></a>

```go
func GrantNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrivilegeCategoryInput`<sup>Optional</sup> <a name="PrivilegeCategoryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeCategoryInput"></a>

```go
func PrivilegeCategoryInput() *string
```

- *Type:* *string

---

##### `PrivilegeTypeInput`<sup>Optional</sup> <a name="PrivilegeTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeTypeInput"></a>

```go
func PrivilegeTypeInput() *string
```

- *Type:* *string

---

##### `UserAssessmentIdInput`<sup>Optional</sup> <a name="UserAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userAssessmentIdInput"></a>

```go
func UserAssessmentIdInput() *string
```

- *Type:* *string

---

##### `UserKeyInput`<sup>Optional</sup> <a name="UserKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userKeyInput"></a>

```go
func UserKeyInput() *string
```

- *Type:* *string

---

##### `DepthLevel`<sup>Required</sup> <a name="DepthLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevel"></a>

```go
func DepthLevel() *f64
```

- *Type:* *f64

---

##### `DepthLevelGreaterThanOrEqualTo`<sup>Required</sup> <a name="DepthLevelGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelGreaterThanOrEqualTo"></a>

```go
func DepthLevelGreaterThanOrEqualTo() *f64
```

- *Type:* *f64

---

##### `DepthLevelLessThan`<sup>Required</sup> <a name="DepthLevelLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelLessThan"></a>

```go
func DepthLevelLessThan() *f64
```

- *Type:* *f64

---

##### `GrantKey`<sup>Required</sup> <a name="GrantKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantKey"></a>

```go
func GrantKey() *string
```

- *Type:* *string

---

##### `GrantName`<sup>Required</sup> <a name="GrantName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantName"></a>

```go
func GrantName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrivilegeCategory`<sup>Required</sup> <a name="PrivilegeCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeCategory"></a>

```go
func PrivilegeCategory() *string
```

- *Type:* *string

---

##### `PrivilegeType`<sup>Required</sup> <a name="PrivilegeType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeType"></a>

```go
func PrivilegeType() *string
```

- *Type:* *string

---

##### `UserAssessmentId`<sup>Required</sup> <a name="UserAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userAssessmentId"></a>

```go
func UserAssessmentId() *string
```

- *Type:* *string

---

##### `UserKey`<sup>Required</sup> <a name="UserKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userKey"></a>

```go
func UserKey() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeListUserGrantsConfig <a name="DataOciDataSafeListUserGrantsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelistusergrants"

&dataocidatasafelistusergrants.DataOciDataSafeListUserGrantsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	UserAssessmentId: *string,
	UserKey: *string,
	DepthLevel: *f64,
	DepthLevelGreaterThanOrEqualTo: *f64,
	DepthLevelLessThan: *f64,
	Filter: interface{},
	GrantKey: *string,
	GrantName: *string,
	Id: *string,
	PrivilegeCategory: *string,
	PrivilegeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.userAssessmentId">UserAssessmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_assessment_id DataOciDataSafeListUserGrants#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.userKey">UserKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_key DataOciDataSafeListUserGrants#user_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevel">DepthLevel</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level DataOciDataSafeListUserGrants#depth_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevelGreaterThanOrEqualTo">DepthLevelGreaterThanOrEqualTo</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_greater_than_or_equal_to DataOciDataSafeListUserGrants#depth_level_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevelLessThan">DepthLevelLessThan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_less_than DataOciDataSafeListUserGrants#depth_level_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.grantKey">GrantKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_key DataOciDataSafeListUserGrants#grant_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.grantName">GrantName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_name DataOciDataSafeListUserGrants#grant_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#id DataOciDataSafeListUserGrants#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.privilegeCategory">PrivilegeCategory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_category DataOciDataSafeListUserGrants#privilege_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.privilegeType">PrivilegeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_type DataOciDataSafeListUserGrants#privilege_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `UserAssessmentId`<sup>Required</sup> <a name="UserAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.userAssessmentId"></a>

```go
UserAssessmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_assessment_id DataOciDataSafeListUserGrants#user_assessment_id}.

---

##### `UserKey`<sup>Required</sup> <a name="UserKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.userKey"></a>

```go
UserKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_key DataOciDataSafeListUserGrants#user_key}.

---

##### `DepthLevel`<sup>Optional</sup> <a name="DepthLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevel"></a>

```go
DepthLevel *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level DataOciDataSafeListUserGrants#depth_level}.

---

##### `DepthLevelGreaterThanOrEqualTo`<sup>Optional</sup> <a name="DepthLevelGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevelGreaterThanOrEqualTo"></a>

```go
DepthLevelGreaterThanOrEqualTo *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_greater_than_or_equal_to DataOciDataSafeListUserGrants#depth_level_greater_than_or_equal_to}.

---

##### `DepthLevelLessThan`<sup>Optional</sup> <a name="DepthLevelLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevelLessThan"></a>

```go
DepthLevelLessThan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_less_than DataOciDataSafeListUserGrants#depth_level_less_than}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#filter DataOciDataSafeListUserGrants#filter}

---

##### `GrantKey`<sup>Optional</sup> <a name="GrantKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.grantKey"></a>

```go
GrantKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_key DataOciDataSafeListUserGrants#grant_key}.

---

##### `GrantName`<sup>Optional</sup> <a name="GrantName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.grantName"></a>

```go
GrantName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_name DataOciDataSafeListUserGrants#grant_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#id DataOciDataSafeListUserGrants#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivilegeCategory`<sup>Optional</sup> <a name="PrivilegeCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.privilegeCategory"></a>

```go
PrivilegeCategory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_category DataOciDataSafeListUserGrants#privilege_category}.

---

##### `PrivilegeType`<sup>Optional</sup> <a name="PrivilegeType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.privilegeType"></a>

```go
PrivilegeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_type DataOciDataSafeListUserGrants#privilege_type}.

---

### DataOciDataSafeListUserGrantsFilter <a name="DataOciDataSafeListUserGrantsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelistusergrants"

&dataocidatasafelistusergrants.DataOciDataSafeListUserGrantsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#name DataOciDataSafeListUserGrants#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#values DataOciDataSafeListUserGrants#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#regex DataOciDataSafeListUserGrants#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#name DataOciDataSafeListUserGrants#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#values DataOciDataSafeListUserGrants#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#regex DataOciDataSafeListUserGrants#regex}.

---

### DataOciDataSafeListUserGrantsGrants <a name="DataOciDataSafeListUserGrantsGrants" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrants"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrants.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelistusergrants"

&dataocidatasafelistusergrants.DataOciDataSafeListUserGrantsGrants {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeListUserGrantsFilterList <a name="DataOciDataSafeListUserGrantsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelistusergrants"

dataocidatasafelistusergrants.NewDataOciDataSafeListUserGrantsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeListUserGrantsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.get"></a>

```go
func Get(index *f64) DataOciDataSafeListUserGrantsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeListUserGrantsFilterOutputReference <a name="DataOciDataSafeListUserGrantsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelistusergrants"

dataocidatasafelistusergrants.NewDataOciDataSafeListUserGrantsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeListUserGrantsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeListUserGrantsGrantsList <a name="DataOciDataSafeListUserGrantsGrantsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelistusergrants"

dataocidatasafelistusergrants.NewDataOciDataSafeListUserGrantsGrantsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeListUserGrantsGrantsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeListUserGrantsGrantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeListUserGrantsGrantsOutputReference <a name="DataOciDataSafeListUserGrantsGrantsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelistusergrants"

dataocidatasafelistusergrants.NewDataOciDataSafeListUserGrantsGrantsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeListUserGrantsGrantsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.depthLevel">DepthLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.grantName">GrantName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.privilegeCategory">PrivilegeCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.privilegeType">PrivilegeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrants">DataOciDataSafeListUserGrantsGrants</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DepthLevel`<sup>Required</sup> <a name="DepthLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.depthLevel"></a>

```go
func DepthLevel() *f64
```

- *Type:* *f64

---

##### `GrantName`<sup>Required</sup> <a name="GrantName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.grantName"></a>

```go
func GrantName() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `PrivilegeCategory`<sup>Required</sup> <a name="PrivilegeCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.privilegeCategory"></a>

```go
func PrivilegeCategory() *string
```

- *Type:* *string

---

##### `PrivilegeType`<sup>Required</sup> <a name="PrivilegeType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.privilegeType"></a>

```go
func PrivilegeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeListUserGrantsGrants
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrants">DataOciDataSafeListUserGrantsGrants</a>

---



