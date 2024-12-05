# `dataOciCapacityManagementNamespaceOccOverviews` Submodule <a name="`dataOciCapacityManagementNamespaceOccOverviews` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementNamespaceOccOverviews <a name="DataOciCapacityManagementNamespaceOccOverviews" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews oci_capacity_management_namespace_occ_overviews}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementnamespaceoccoverviews"

dataocicapacitymanagementnamespaceoccoverviews.NewDataOciCapacityManagementNamespaceOccOverviews(scope Construct, id *string, config DataOciCapacityManagementNamespaceOccOverviewsConfig) DataOciCapacityManagementNamespaceOccOverviews
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig">DataOciCapacityManagementNamespaceOccOverviewsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig">DataOciCapacityManagementNamespaceOccOverviewsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetTo">ResetTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetWorkloadType">ResetWorkloadType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetFrom` <a name="ResetFrom" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetFrom"></a>

```go
func ResetFrom()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetId"></a>

```go
func ResetId()
```

##### `ResetTo` <a name="ResetTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetTo"></a>

```go
func ResetTo()
```

##### `ResetWorkloadType` <a name="ResetWorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetWorkloadType"></a>

```go
func ResetWorkloadType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementNamespaceOccOverviews resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementnamespaceoccoverviews"

dataocicapacitymanagementnamespaceoccoverviews.DataOciCapacityManagementNamespaceOccOverviews_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementnamespaceoccoverviews"

dataocicapacitymanagementnamespaceoccoverviews.DataOciCapacityManagementNamespaceOccOverviews_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementnamespaceoccoverviews"

dataocicapacitymanagementnamespaceoccoverviews.DataOciCapacityManagementNamespaceOccOverviews_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementnamespaceoccoverviews"

dataocicapacitymanagementnamespaceoccoverviews.DataOciCapacityManagementNamespaceOccOverviews_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCapacityManagementNamespaceOccOverviews resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCapacityManagementNamespaceOccOverviews to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCapacityManagementNamespaceOccOverviews that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementNamespaceOccOverviews to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList">DataOciCapacityManagementNamespaceOccOverviewsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.occOverviewCollection">OccOverviewCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.toInput">ToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.workloadTypeInput">WorkloadTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.to">To</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.workloadType">WorkloadType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.filter"></a>

```go
func Filter() DataOciCapacityManagementNamespaceOccOverviewsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList">DataOciCapacityManagementNamespaceOccOverviewsFilterList</a>

---

##### `OccOverviewCollection`<sup>Required</sup> <a name="OccOverviewCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.occOverviewCollection"></a>

```go
func OccOverviewCollection() DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.toInput"></a>

```go
func ToInput() *string
```

- *Type:* *string

---

##### `WorkloadTypeInput`<sup>Optional</sup> <a name="WorkloadTypeInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.workloadTypeInput"></a>

```go
func WorkloadTypeInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `To`<sup>Required</sup> <a name="To" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.to"></a>

```go
func To() *string
```

- *Type:* *string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.workloadType"></a>

```go
func WorkloadType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementNamespaceOccOverviewsConfig <a name="DataOciCapacityManagementNamespaceOccOverviewsConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementnamespaceoccoverviews"

&dataocicapacitymanagementnamespaceoccoverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Namespace: *string,
	Filter: interface{},
	From: *string,
	Id: *string,
	To: *string,
	WorkloadType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#compartment_id DataOciCapacityManagementNamespaceOccOverviews#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#namespace DataOciCapacityManagementNamespaceOccOverviews#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.from">From</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#from DataOciCapacityManagementNamespaceOccOverviews#from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#id DataOciCapacityManagementNamespaceOccOverviews#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.to">To</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#to DataOciCapacityManagementNamespaceOccOverviews#to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.workloadType">WorkloadType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#workload_type DataOciCapacityManagementNamespaceOccOverviews#workload_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#compartment_id DataOciCapacityManagementNamespaceOccOverviews#compartment_id}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#namespace DataOciCapacityManagementNamespaceOccOverviews#namespace}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#filter DataOciCapacityManagementNamespaceOccOverviews#filter}

---

##### `From`<sup>Optional</sup> <a name="From" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.from"></a>

```go
From *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#from DataOciCapacityManagementNamespaceOccOverviews#from}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#id DataOciCapacityManagementNamespaceOccOverviews#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `To`<sup>Optional</sup> <a name="To" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.to"></a>

```go
To *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#to DataOciCapacityManagementNamespaceOccOverviews#to}.

---

##### `WorkloadType`<sup>Optional</sup> <a name="WorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.workloadType"></a>

```go
WorkloadType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#workload_type DataOciCapacityManagementNamespaceOccOverviews#workload_type}.

---

### DataOciCapacityManagementNamespaceOccOverviewsFilter <a name="DataOciCapacityManagementNamespaceOccOverviewsFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementnamespaceoccoverviews"

&dataocicapacitymanagementnamespaceoccoverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#name DataOciCapacityManagementNamespaceOccOverviews#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#values DataOciCapacityManagementNamespaceOccOverviews#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#regex DataOciCapacityManagementNamespaceOccOverviews#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#name DataOciCapacityManagementNamespaceOccOverviews#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#values DataOciCapacityManagementNamespaceOccOverviews#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#regex DataOciCapacityManagementNamespaceOccOverviews#regex}.

---

### DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection <a name="DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementnamespaceoccoverviews"

&dataocicapacitymanagementnamespaceoccoverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection {

}
```


### DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems <a name="DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementnamespaceoccoverviews"

&dataocicapacitymanagementnamespaceoccoverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementNamespaceOccOverviewsFilterList <a name="DataOciCapacityManagementNamespaceOccOverviewsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementnamespaceoccoverviews"

dataocicapacitymanagementnamespaceoccoverviews.NewDataOciCapacityManagementNamespaceOccOverviewsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCapacityManagementNamespaceOccOverviewsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.get"></a>

```go
func Get(index *f64) DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference <a name="DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementnamespaceoccoverviews"

dataocicapacitymanagementnamespaceoccoverviews.NewDataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList <a name="DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementnamespaceoccoverviews"

dataocicapacitymanagementnamespaceoccoverviews.NewDataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference <a name="DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementnamespaceoccoverviews"

dataocicapacitymanagementnamespaceoccoverviews.NewDataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.capacityRequestsBlob">CapacityRequestsBlob</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.periodValue">PeriodValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalAvailable">TotalAvailable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalCancelled">TotalCancelled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalDemanded">TotalDemanded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalRejected">TotalRejected</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalSupplied">TotalSupplied</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalUnfulfilled">TotalUnfulfilled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.workloadTypeBreakdownBlob">WorkloadTypeBreakdownBlob</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityRequestsBlob`<sup>Required</sup> <a name="CapacityRequestsBlob" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.capacityRequestsBlob"></a>

```go
func CapacityRequestsBlob() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `PeriodValue`<sup>Required</sup> <a name="PeriodValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.periodValue"></a>

```go
func PeriodValue() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `TotalAvailable`<sup>Required</sup> <a name="TotalAvailable" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalAvailable"></a>

```go
func TotalAvailable() *string
```

- *Type:* *string

---

##### `TotalCancelled`<sup>Required</sup> <a name="TotalCancelled" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalCancelled"></a>

```go
func TotalCancelled() *string
```

- *Type:* *string

---

##### `TotalDemanded`<sup>Required</sup> <a name="TotalDemanded" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalDemanded"></a>

```go
func TotalDemanded() *string
```

- *Type:* *string

---

##### `TotalRejected`<sup>Required</sup> <a name="TotalRejected" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalRejected"></a>

```go
func TotalRejected() *string
```

- *Type:* *string

---

##### `TotalSupplied`<sup>Required</sup> <a name="TotalSupplied" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalSupplied"></a>

```go
func TotalSupplied() *string
```

- *Type:* *string

---

##### `TotalUnfulfilled`<sup>Required</sup> <a name="TotalUnfulfilled" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalUnfulfilled"></a>

```go
func TotalUnfulfilled() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `WorkloadTypeBreakdownBlob`<sup>Required</sup> <a name="WorkloadTypeBreakdownBlob" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.workloadTypeBreakdownBlob"></a>

```go
func WorkloadTypeBreakdownBlob() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems</a>

---


### DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList <a name="DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementnamespaceoccoverviews"

dataocicapacitymanagementnamespaceoccoverviews.NewDataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.get"></a>

```go
func Get(index *f64) DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference <a name="DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementnamespaceoccoverviews"

dataocicapacitymanagementnamespaceoccoverviews.NewDataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.items"></a>

```go
func Items() DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection</a>

---



