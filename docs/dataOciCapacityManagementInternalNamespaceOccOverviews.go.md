# `dataOciCapacityManagementInternalNamespaceOccOverviews` Submodule <a name="`dataOciCapacityManagementInternalNamespaceOccOverviews` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementInternalNamespaceOccOverviews <a name="DataOciCapacityManagementInternalNamespaceOccOverviews" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews oci_capacity_management_internal_namespace_occ_overviews}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementinternalnamespaceoccoverviews"

dataocicapacitymanagementinternalnamespaceoccoverviews.NewDataOciCapacityManagementInternalNamespaceOccOverviews(scope Construct, id *string, config DataOciCapacityManagementInternalNamespaceOccOverviewsConfig) DataOciCapacityManagementInternalNamespaceOccOverviews
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig">DataOciCapacityManagementInternalNamespaceOccOverviewsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig">DataOciCapacityManagementInternalNamespaceOccOverviewsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetTo">ResetTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetWorkloadType">ResetWorkloadType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetFrom` <a name="ResetFrom" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetFrom"></a>

```go
func ResetFrom()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetId"></a>

```go
func ResetId()
```

##### `ResetTo` <a name="ResetTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetTo"></a>

```go
func ResetTo()
```

##### `ResetWorkloadType` <a name="ResetWorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.resetWorkloadType"></a>

```go
func ResetWorkloadType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementInternalNamespaceOccOverviews resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementinternalnamespaceoccoverviews"

dataocicapacitymanagementinternalnamespaceoccoverviews.DataOciCapacityManagementInternalNamespaceOccOverviews_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementinternalnamespaceoccoverviews"

dataocicapacitymanagementinternalnamespaceoccoverviews.DataOciCapacityManagementInternalNamespaceOccOverviews_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementinternalnamespaceoccoverviews"

dataocicapacitymanagementinternalnamespaceoccoverviews.DataOciCapacityManagementInternalNamespaceOccOverviews_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementinternalnamespaceoccoverviews"

dataocicapacitymanagementinternalnamespaceoccoverviews.DataOciCapacityManagementInternalNamespaceOccOverviews_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCapacityManagementInternalNamespaceOccOverviews resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCapacityManagementInternalNamespaceOccOverviews to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCapacityManagementInternalNamespaceOccOverviews that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementInternalNamespaceOccOverviews to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList">DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.occOverviewCollection">OccOverviewCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.occCustomerGroupIdInput">OccCustomerGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.toInput">ToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.workloadTypeInput">WorkloadTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.occCustomerGroupId">OccCustomerGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.to">To</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.workloadType">WorkloadType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.filter"></a>

```go
func Filter() DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList">DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList</a>

---

##### `OccOverviewCollection`<sup>Required</sup> <a name="OccOverviewCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.occOverviewCollection"></a>

```go
func OccOverviewCollection() DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OccCustomerGroupIdInput`<sup>Optional</sup> <a name="OccCustomerGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.occCustomerGroupIdInput"></a>

```go
func OccCustomerGroupIdInput() *string
```

- *Type:* *string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.toInput"></a>

```go
func ToInput() *string
```

- *Type:* *string

---

##### `WorkloadTypeInput`<sup>Optional</sup> <a name="WorkloadTypeInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.workloadTypeInput"></a>

```go
func WorkloadTypeInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OccCustomerGroupId`<sup>Required</sup> <a name="OccCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.occCustomerGroupId"></a>

```go
func OccCustomerGroupId() *string
```

- *Type:* *string

---

##### `To`<sup>Required</sup> <a name="To" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.to"></a>

```go
func To() *string
```

- *Type:* *string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.workloadType"></a>

```go
func WorkloadType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviews.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementInternalNamespaceOccOverviewsConfig <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementinternalnamespaceoccoverviews"

&dataocicapacitymanagementinternalnamespaceoccoverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Namespace: *string,
	OccCustomerGroupId: *string,
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#compartment_id DataOciCapacityManagementInternalNamespaceOccOverviews#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#namespace DataOciCapacityManagementInternalNamespaceOccOverviews#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.occCustomerGroupId">OccCustomerGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#occ_customer_group_id DataOciCapacityManagementInternalNamespaceOccOverviews#occ_customer_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.from">From</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#from DataOciCapacityManagementInternalNamespaceOccOverviews#from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#id DataOciCapacityManagementInternalNamespaceOccOverviews#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.to">To</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#to DataOciCapacityManagementInternalNamespaceOccOverviews#to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.workloadType">WorkloadType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#workload_type DataOciCapacityManagementInternalNamespaceOccOverviews#workload_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#compartment_id DataOciCapacityManagementInternalNamespaceOccOverviews#compartment_id}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#namespace DataOciCapacityManagementInternalNamespaceOccOverviews#namespace}.

---

##### `OccCustomerGroupId`<sup>Required</sup> <a name="OccCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.occCustomerGroupId"></a>

```go
OccCustomerGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#occ_customer_group_id DataOciCapacityManagementInternalNamespaceOccOverviews#occ_customer_group_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#filter DataOciCapacityManagementInternalNamespaceOccOverviews#filter}

---

##### `From`<sup>Optional</sup> <a name="From" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.from"></a>

```go
From *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#from DataOciCapacityManagementInternalNamespaceOccOverviews#from}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#id DataOciCapacityManagementInternalNamespaceOccOverviews#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `To`<sup>Optional</sup> <a name="To" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.to"></a>

```go
To *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#to DataOciCapacityManagementInternalNamespaceOccOverviews#to}.

---

##### `WorkloadType`<sup>Optional</sup> <a name="WorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsConfig.property.workloadType"></a>

```go
WorkloadType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#workload_type DataOciCapacityManagementInternalNamespaceOccOverviews#workload_type}.

---

### DataOciCapacityManagementInternalNamespaceOccOverviewsFilter <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementinternalnamespaceoccoverviews"

&dataocicapacitymanagementinternalnamespaceoccoverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#name DataOciCapacityManagementInternalNamespaceOccOverviews#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#values DataOciCapacityManagementInternalNamespaceOccOverviews#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#regex DataOciCapacityManagementInternalNamespaceOccOverviews#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#name DataOciCapacityManagementInternalNamespaceOccOverviews#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#values DataOciCapacityManagementInternalNamespaceOccOverviews#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_namespace_occ_overviews#regex DataOciCapacityManagementInternalNamespaceOccOverviews#regex}.

---

### DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementinternalnamespaceoccoverviews"

&dataocicapacitymanagementinternalnamespaceoccoverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection {

}
```


### DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementinternalnamespaceoccoverviews"

&dataocicapacitymanagementinternalnamespaceoccoverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementinternalnamespaceoccoverviews"

dataocicapacitymanagementinternalnamespaceoccoverviews.NewDataOciCapacityManagementInternalNamespaceOccOverviewsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.get"></a>

```go
func Get(index *f64) DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementinternalnamespaceoccoverviews"

dataocicapacitymanagementinternalnamespaceoccoverviews.NewDataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementinternalnamespaceoccoverviews"

dataocicapacitymanagementinternalnamespaceoccoverviews.NewDataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementinternalnamespaceoccoverviews"

dataocicapacitymanagementinternalnamespaceoccoverviews.NewDataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.capacityRequestsBlob">CapacityRequestsBlob</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.periodValue">PeriodValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalAvailable">TotalAvailable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalCancelled">TotalCancelled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalDemanded">TotalDemanded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalRejected">TotalRejected</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalSupplied">TotalSupplied</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalUnfulfilled">TotalUnfulfilled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.workloadTypeBreakdownBlob">WorkloadTypeBreakdownBlob</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityRequestsBlob`<sup>Required</sup> <a name="CapacityRequestsBlob" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.capacityRequestsBlob"></a>

```go
func CapacityRequestsBlob() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `PeriodValue`<sup>Required</sup> <a name="PeriodValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.periodValue"></a>

```go
func PeriodValue() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `TotalAvailable`<sup>Required</sup> <a name="TotalAvailable" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalAvailable"></a>

```go
func TotalAvailable() *string
```

- *Type:* *string

---

##### `TotalCancelled`<sup>Required</sup> <a name="TotalCancelled" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalCancelled"></a>

```go
func TotalCancelled() *string
```

- *Type:* *string

---

##### `TotalDemanded`<sup>Required</sup> <a name="TotalDemanded" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalDemanded"></a>

```go
func TotalDemanded() *string
```

- *Type:* *string

---

##### `TotalRejected`<sup>Required</sup> <a name="TotalRejected" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalRejected"></a>

```go
func TotalRejected() *string
```

- *Type:* *string

---

##### `TotalSupplied`<sup>Required</sup> <a name="TotalSupplied" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalSupplied"></a>

```go
func TotalSupplied() *string
```

- *Type:* *string

---

##### `TotalUnfulfilled`<sup>Required</sup> <a name="TotalUnfulfilled" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalUnfulfilled"></a>

```go
func TotalUnfulfilled() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `WorkloadTypeBreakdownBlob`<sup>Required</sup> <a name="WorkloadTypeBreakdownBlob" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.workloadTypeBreakdownBlob"></a>

```go
func WorkloadTypeBreakdownBlob() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItems</a>

---


### DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementinternalnamespaceoccoverviews"

dataocicapacitymanagementinternalnamespaceoccoverviews.NewDataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.get"></a>

```go
func Get(index *f64) DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference <a name="DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementinternalnamespaceoccoverviews"

dataocicapacitymanagementinternalnamespaceoccoverviews.NewDataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.items"></a>

```go
func Items() DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalNamespaceOccOverviews.DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection">DataOciCapacityManagementInternalNamespaceOccOverviewsOccOverviewCollection</a>

---



